const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');
const leftScoreElement = document.getElementById('leftScore');
const rightScoreElement = document.getElementById('rightScore');
const timerElement = document.getElementById('timer');
const aiTextElement = document.getElementById('aiText');
const gameOverElement = document.getElementById('gameOver');
const gamePausedElement = document.getElementById('gamePaused');

// Game constants
const WIDTH = 800;
const HEIGHT = 400;
const PADDLE_WIDTH = 12;
const PADDLE_HEIGHT = 80;
const PADDLE_SPEED = 6;
const BALL_SIZE = 12;
const BALL_SPEED = 6.5; // Slightly slower for better gameplay
const GAME_TIME = 60; // 1 minute
const WIN_SCORE = 10;

// Game state
let gameState = 'playing'; // playing, paused, ended
let gameTime = GAME_TIME;
let leftScore = 0;
let rightScore = 0;
let lastAiMessage = '';
let aiMessageTimer = 0;
let rallyCount = 0;
let gameStartTime = Date.now();

// Game objects
let leftPaddle = {
    x: 20,
    y: HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    targetY: HEIGHT / 2 - PADDLE_HEIGHT / 2
};

let rightPaddle = {
    x: WIDTH - PADDLE_WIDTH - 20,
    y: HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    targetOffset: 0, // For smooth AI targeting
    lastTargetUpdate: 0 // To prevent constant target changes
};

let ball = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    vx: BALL_SPEED * (Math.random() > 0.5 ? 1 : -1),
    vy: BALL_SPEED * (Math.random() * 0.5 - 0.25),
    size: BALL_SIZE
};

// AI Messages
const aiMessages = {
    start: [
        "Let's see what you've got! I've been training hard! 💪",
        "Ready for a challenge? I won't go easy on you! 😎",
        "Game on! May the best player win! 🏆"
    ],
    playerScore: [
        "Nice shot! But I'm just getting warmed up! 🔥",
        "Good one! You're better than I expected! 👏",
        "Impressive! But can you keep it up? 😏",
        "Not bad! You're making this interesting! ⚡"
    ],
    aiScore: [
        "Gotcha! My algorithms are working perfectly! 🤖",
        "That's how it's done! Processing... victory! 💻",
        "Boom! My reflexes are getting sharper! ⚡",
        "Nice try, but I calculated that perfectly! 🎯"
    ],
    longRally: [
        "This is intense! What a rally! 🏃‍♂️",
        "Amazing back and forth! We're both on fire! 🔥",
        "This is the kind of game I live for! ⚡",
        "Incredible rally! Neither of us wants to give up! 💪"
    ],
    closeGame: [
        "This is too close for comfort! 😰",
        "Every point matters now! The tension is real! 🔥",
        "My processors are overheating from this intensity! 💻",
        "We're neck and neck! This is what competition is about! ⚔️"
    ],
    timeRunningOut: [
        "Time is running out! Every second counts! ⏰",
        "The clock is ticking! Who wants it more? ⏳",
        "Final stretch! This is where champions are made! 🏆",
        "Time pressure! Let's see who cracks first! 💥"
    ],
    playerWin: [
        "Wow! You really brought your A-game! Congratulations! 🏆",
        "That was incredible! You've earned this victory! 👏",
        "Amazing skills! I need to update my algorithms! 🤖",
        "Well played! You've shown me what human determination can do! 💪"
    ],
    aiWin: [
        "Good game! You pushed me to my limits! 🤖",
        "That was fun! You're a worthy opponent! 👍",
        "Victory! But you made me work for every point! 💪",
        "Great match! Your improvement during the game was impressive! 🎯"
    ],
    tie: [
        "What a game! Perfectly matched opponents! 🤝",
        "A tie! We're evenly matched! Great game! ⚖️",
        "Neither of us backing down! Respect! 👊",
        "Incredible! A perfect deadlock! 🔥"
    ]
};

// Event listeners
canvas.addEventListener('mousemove', handleMouseMove);
document.getElementById('pauseBtn').addEventListener('click', togglePause);
document.getElementById('restartBtn').addEventListener('click', restartGame);
document.getElementById('playAgainBtn').addEventListener('click', restartGame);
canvas.addEventListener('click', handleCanvasClick);
document.addEventListener('keydown', handleKeyPress);

function handleMouseMove(e) {
    if (gameState !== 'playing') return;
    const rect = canvas.getBoundingClientRect();
    const scaleY = canvas.height / rect.height;
    const mouseY = (e.clientY - rect.top) * scaleY;
    leftPaddle.targetY = mouseY - PADDLE_HEIGHT / 2;
    leftPaddle.targetY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, leftPaddle.targetY));
}

function handleCanvasClick() {
    if (gameState === 'paused') {
        togglePause();
    }
}

function handleKeyPress(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePause();
    }
}

function togglePause() {
    if (gameState === 'ended') return;
    
    if (gameState === 'playing') {
        gameState = 'paused';
        gamePausedElement.style.display = 'block';
        document.getElementById('pauseBtn').textContent = 'Resume';
    } else {
        gameState = 'playing';
        gamePausedElement.style.display = 'none';
        document.getElementById('pauseBtn').textContent = 'Pause';
    }
}

function restartGame() {
    gameState = 'playing';
    gameTime = GAME_TIME;
    leftScore = 0;
    rightScore = 0;
    rallyCount = 0;
    gameStartTime = Date.now();
    
    leftScoreElement.textContent = '0';
    rightScoreElement.textContent = '0';
    gameOverElement.style.display = 'none';
    gamePausedElement.style.display = 'none';
    document.getElementById('pauseBtn').textContent = 'Pause';
    
    resetBall();
    updateAiMessage(getRandomMessage('start'));
}

function updateAiMessage(message) {
    if (message !== lastAiMessage) {
        aiTextElement.textContent = message;
        lastAiMessage = message;
        aiMessageTimer = Date.now();
    }
}

function getRandomMessage(category) {
    const messages = aiMessages[category];
    return messages[Math.floor(Math.random() * messages.length)];
}

function resetBall() {
    ball.x = WIDTH / 2;
    ball.y = HEIGHT / 2;
    const speed = BALL_SPEED + (Math.random() * 1.5 - 0.75); // Slight speed variation
    ball.vx = speed * (Math.random() > 0.5 ? 1 : -1);
    ball.vy = speed * (Math.random() * 0.6 - 0.3); // Better angle variety
    rallyCount = 0;
}

function updateGame() {
    if (gameState !== 'playing') return;

    // Update timer
    const elapsed = (Date.now() - gameStartTime) / 1000;
    gameTime = Math.max(0, GAME_TIME - elapsed);
    
    const minutes = Math.floor(gameTime / 60);
    const seconds = Math.floor(gameTime % 60);
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Smooth paddle movement
    const paddleDiff = leftPaddle.targetY - leftPaddle.y;
    leftPaddle.y += paddleDiff * 0.15;

    // Move ball
    ball.x += ball.vx;
    ball.y += ball.vy;
    rallyCount++;

    // Ball collision with top and bottom
    if (ball.y <= ball.size/2 || ball.y >= HEIGHT - ball.size/2) {
        ball.vy = -ball.vy;
        ball.y = ball.y <= ball.size/2 ? ball.size/2 : HEIGHT - ball.size/2;
    }

    // Ball collision with left paddle
    if (ball.x - ball.size/2 <= leftPaddle.x + leftPaddle.width &&
        ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + leftPaddle.height &&
        ball.vx < 0) {
        
        ball.vx = -ball.vx * 1.02; // Slight speed increase on hit
        ball.x = leftPaddle.x + leftPaddle.width + ball.size/2;
        
        // Add spin based on paddle position
        const hitPos = (ball.y - (leftPaddle.y + leftPaddle.height/2)) / (leftPaddle.height/2);
        ball.vy += hitPos * 2.5;
        
        // Clamp ball velocity to reasonable limits
        ball.vx = Math.max(-12, Math.min(12, ball.vx));
        ball.vy = Math.max(-8, Math.min(8, ball.vy));
        
        if (rallyCount > 200) {
            updateAiMessage(getRandomMessage('longRally'));
        }
    }

    // Ball collision with right paddle
    if (ball.x + ball.size/2 >= rightPaddle.x &&
        ball.y >= rightPaddle.y && ball.y <= rightPaddle.y + rightPaddle.height &&
        ball.vx > 0) {
        
        ball.vx = -ball.vx * 1.02; // Slight speed increase on hit
        ball.x = rightPaddle.x - ball.size/2;
        
        const hitPos = (ball.y - (rightPaddle.y + rightPaddle.height/2)) / (rightPaddle.height/2);
        ball.vy += hitPos * 2.5;
        
        // Clamp ball velocity to reasonable limits
        ball.vx = Math.max(-12, Math.min(12, ball.vx));
        ball.vy = Math.max(-8, Math.min(8, ball.vy));
        
        if (rallyCount > 200) {
            updateAiMessage(getRandomMessage('longRally'));
        }
    }

    // Scoring
    if (ball.x < 0) {
        rightScore++;
        rightScoreElement.textContent = rightScore;
        updateAiMessage(getRandomMessage('aiScore'));
        resetBall();
        checkGameEnd();
    } else if (ball.x > WIDTH) {
        leftScore++;
        leftScoreElement.textContent = leftScore;
        updateAiMessage(getRandomMessage('playerScore'));
        resetBall();
        checkGameEnd();
    }

    // AI paddle movement with smooth, realistic behavior
    const currentTime = Date.now();
    
    // Only update AI targeting periodically to prevent shaking
    if (currentTime - rightPaddle.lastTargetUpdate > 100) { // Update every 100ms
        const mistakeChance = Math.random();
        
        // Calculate base target
        let baseTarget = ball.y - rightPaddle.height / 2;
        
        // Add imperfection offset that stays consistent for a short time
        if (mistakeChance < 0.15) { // 15% chance of imperfect targeting
            rightPaddle.targetOffset = (Math.random() - 0.5) * 30; // ±15 pixel offset
        } else if (mistakeChance < 0.05) { // 5% chance of bigger mistake
            rightPaddle.targetOffset = (Math.random() - 0.5) * 60; // ±30 pixel offset
        } else {
            rightPaddle.targetOffset *= 0.8; // Gradually correct the offset
        }
        
        rightPaddle.lastTargetUpdate = currentTime;
    }
    
    // Calculate final target with consistent offset
    const aiTarget = ball.y - rightPaddle.height / 2 + rightPaddle.targetOffset;
    const aiDiff = aiTarget - rightPaddle.y;
    
    // Calculate AI speed with realistic limitations
    let aiSpeed = PADDLE_SPEED;
    let aiAccuracy = 1.0;
    
    // Reduce accuracy when ball is moving fast
    const ballSpeed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    if (ballSpeed > 8) {
        aiAccuracy *= 0.75; // 25% less accurate on fast balls
    }
    
    // Reduce accuracy during long rallies (AI gets "tired")
    if (rallyCount > 150) {
        aiAccuracy *= 0.85; // 15% reduction when tired
        aiSpeed *= 0.9; // Also move slightly slower when tired
    }
    
    // Occasional reaction delay
    const reactionChance = Math.random();
    if (reactionChance < 0.1) { // 10% chance of slower reaction
        aiSpeed *= 0.6;
    }
    
    // Apply smooth movement with dead zone to prevent micro-jitters
    const finalSpeed = Math.min(aiSpeed * aiAccuracy, Math.abs(aiDiff) * 0.8);
    
    if (aiDiff > 3) { // Dead zone to prevent jittering
        rightPaddle.y += finalSpeed;
    } else if (aiDiff < -3) {
        rightPaddle.y -= finalSpeed;
    }
    
    // Clamp paddle position
    rightPaddle.y = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, rightPaddle.y));

    // Dynamic AI messages
    if (Date.now() - aiMessageTimer > 5000) {
        const scoreDiff = Math.abs(leftScore - rightScore);
        if (gameTime < 20) {
            updateAiMessage(getRandomMessage('timeRunningOut'));
        } else if (scoreDiff <= 1 && (leftScore >= 5 || rightScore >= 5)) {
            updateAiMessage(getRandomMessage('closeGame'));
        }
    }

    // Check for game end
    if (gameTime <= 0 || leftScore >= WIN_SCORE || rightScore >= WIN_SCORE) {
        checkGameEnd();
    }
}

function checkGameEnd() {
    const timeUp = gameTime <= 0;
    const scoreReached = leftScore >= WIN_SCORE || rightScore >= WIN_SCORE;
    
    if (timeUp || scoreReached) {
        gameState = 'ended';
        showGameOver();
    }
}

function showGameOver() {
    let winner, message, badge;
    
    if (leftScore > rightScore) {
        winner = 'player';
        badge = '🏆 You Win!';
        message = getRandomMessage('playerWin');
    } else if (rightScore > leftScore) {
        winner = 'ai';
        badge = '🤖 AI Wins!';
        message = getRandomMessage('aiWin');
    } else {
        winner = 'tie';
        badge = '🤝 It\'s a Tie!';
        message = getRandomMessage('tie');
    }
    
    document.getElementById('winnerBadge').textContent = badge;
    document.getElementById('gameOverTitle').textContent = 
        winner === 'player' ? 'Congratulations!' : 
        winner === 'ai' ? 'Good Game!' : 'What a Match!';
    
    document.getElementById('finalScore').textContent = 
        `Final Score: ${leftScore} - ${rightScore}`;
    
    document.getElementById('finalAiMessage').textContent = message;
    gameOverElement.style.display = 'flex';
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Draw center line
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
    ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size / 2, 0, Math.PI * 2);
    ctx.fill();
}

function gameLoop() {
    updateGame();
    draw();
    requestAnimationFrame(gameLoop);
}

// Initialize game
restartGame();
gameLoop();
