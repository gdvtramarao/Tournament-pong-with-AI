# 🏓 Tournament Pong with AI

A modern, interactive Pong game with AI commentary and tournament-style gameplay. Built with vanilla HTML5, CSS3, and JavaScript.

![Tournament Pong Banner](https://img.shields.io/badge/Game-Tournament%20Pong-blue?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎮 Game Overview

Tournament Pong elevates the classic Pong experience with modern features, engaging AI commentary, and competitive tournament rules. Challenge yourself against an intelligent AI opponent that adapts and provides real-time feedback throughout the match.

## ✨ Features

### 🏆 Tournament Mode
- **First to 10 points wins** or highest score when time runs out
- **60-second time limit** with live countdown timer
- **Professional scoreboard** with clean, modern design

### 🤖 AI Competitor
- **Smart AI opponent** with realistic paddle physics
- **Dynamic commentary system** that responds to game events
- **Contextual messages** based on score, rallies, and time remaining
- **Adaptive difficulty** - AI becomes less perfect at higher ball speeds

### 🎯 Enhanced Gameplay
- **Progressive ball acceleration** - gets faster with each paddle hit
- **Realistic physics** with paddle spin effects
- **Smooth controls** with mouse tracking
- **Pause/Resume functionality** (spacebar or button)

### 🎨 Modern UI/UX
- **Clean, professional design** with gradient backgrounds
- **Responsive layout** that works on all devices
- **Intuitive controls** with visual feedback
- **Game over screen** with detailed match results

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gdvtramarao/Tournament-pong-with-AI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Tournament-pong-with-AI
   ```

3. Open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```

**Or simply double-click on `index.html`**

## 🎮 How to Play

### Controls
- **Mouse Movement**: Move your mouse up and down to control your paddle
- **Spacebar**: Pause/Resume the game
- **Pause Button**: Pause the game
- **New Game Button**: Start a fresh match

### Game Rules
1. **Winning Conditions**: First player to reach 10 points OR highest score when the 60-second timer expires
2. **Ball Physics**: Ball speed increases slightly with each paddle hit
3. **Paddle Effects**: Hit the ball with different parts of your paddle to add spin
4. **AI Opponent**: The AI adapts its difficulty based on ball speed and provides commentary

### AI Commentary System
The AI opponent provides dynamic commentary including:
- **Motivational start messages**
- **Reactions to scoring**
- **Excitement during long rallies**
- **Tension acknowledgment in close games**
- **Time pressure warnings**
- **Respectful end-game messages**

## 📁 Project Structure

```
Tournament-pong-with-AI/
│
├── index.html          # Main HTML structure
├── style.css           # CSS styling and responsive design
├── game.js            # JavaScript game logic and AI system
└── README.md          # Project documentation
```

## 🛠️ Technical Details

### Built With
- **HTML5 Canvas** for game rendering
- **Vanilla JavaScript** for game logic and AI
- **CSS3** with modern features (flexbox, gradients, animations)
- **Responsive Design** principles

### Key Features Implementation
- **Game Loop**: Uses `requestAnimationFrame` for smooth 60fps gameplay
- **Collision Detection**: Precise ball-paddle and boundary collision system
- **AI Logic**: Smart paddle movement with imperfection algorithms
- **Commentary System**: Context-aware message selection based on game state
- **Timer System**: Real-time countdown with game end conditions

## 🎨 Design Philosophy

- **Clean & Modern**: Professional UI that doesn't distract from gameplay
- **Accessible**: High contrast colors and readable fonts
- **Responsive**: Seamless experience across desktop and mobile devices
- **Intuitive**: Clear visual feedback and easy-to-understand controls

## 🔧 Customization

### Modify Game Parameters
Edit `game.js` to customize:
```javascript
const GAME_TIME = 60;        // Game duration in seconds
const WIN_SCORE = 10;        // Points needed to win
const BALL_SPEED = 7;        // Initial ball speed
const PADDLE_SPEED = 6;      // AI paddle speed
```

### Customize AI Messages
Add new commentary in the `aiMessages` object in `game.js`:
```javascript
const aiMessages = {
    start: ["Your custom start message! 🎮"],
    playerScore: ["Custom player score reaction! 👏"],
    // ... more categories
};
```

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Report bugs** or suggest features via GitHub Issues
2. **Submit pull requests** for improvements
3. **Add new AI commentary** messages
4. **Improve responsive design** for different screen sizes
5. **Add new game modes** or features

### Development Setup
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- On some mobile devices, mouse movement might not be as responsive
- Timer precision may vary slightly between browsers
- Canvas scaling on very small screens (< 320px) needs improvement

## 🔮 Future Enhancements

- [ ] Keyboard controls (WASD or Arrow keys)
- [ ] Multiple difficulty levels
- [ ] Sound effects and background music
- [ ] Multiplayer mode (two human players)
- [ ] Tournament bracket system
- [ ] Score history and statistics
- [ ] Custom themes and color schemes
- [ ] Touch controls for mobile devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**gdvtramarao**
- Crafted with passion and innovation

## 🙏 Acknowledgments

- Inspired by the classic Atari Pong (1972)
- Modern web technologies and responsive design principles
- Community feedback and suggestions

## 🌟 Show Your Support

Give a ⭐️ if you enjoyed playing Tournament Pong!

---

*Ready to test your reflexes against an AI that talks back? Launch the game and show the AI what you're made of!* 🚀
