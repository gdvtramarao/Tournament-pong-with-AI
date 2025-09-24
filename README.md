# 🏓 Tournament Pong

A modern, interactive Pong game with AI commentary and tournament-style gameplay. Built with vanilla HTML5, CSS3, and JavaScript.

[![Live Demo](https://img.shields.io/badge/🎮_Play_Live-Tournament_Pong-success?style=for-the-badge)](https://tournamentpong.vercel.app/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 [**PLAY NOW →**](https://tournamentpong.vercel.app/)

## 🌟 Live Demo

**🎮 [Play Tournament Pong Now!](https://tournamentpong.vercel.app/)**

Experience the thrill of competitive Pong with intelligent AI commentary. No downloads required - play instantly in your browser!

> **💻 Desktop/Laptop Required**: This game is optimized for desktop and laptop computers with mouse cursor controls. Mobile devices are not currently supported for the best gameplay experience.

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
- **Smooth mouse controls** - move your cursor up and down to control paddle
- **Pause/Resume functionality** (spacebar or button)

### 🎨 Modern UI/UX
- **Clean, professional design** with gradient backgrounds
- **Responsive layout** that works on desktop and laptop screens
- **Intuitive mouse-based controls** with visual feedback
- **Game over screen** with detailed match results

### 📊 Vercel Analytics Integration
Tournament Pong now comes with **built-in analytics** to help understand player engagement:

#### ✅ **Automatic Tracking**
- Page views and user sessions
- Game start and completion events
- Player vs AI scoring statistics
- Game duration and engagement metrics

#### 📈 **Custom Game Events**
- **Game Started**: Tracks new game initiations
- **Scoring Events**: Monitors player and AI points
- **Game Completion**: Records winners, scores, and match duration
- **Performance Insights**: Helps optimize gameplay experience

## 🖱️ System Requirements

### 💻 **Recommended Setup**
- **Desktop or Laptop Computer** (required)
- **Mouse or Trackpad** for paddle control
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Stable internet connection** for best experience

### 🚫 **Platform Limitations**
- **Mobile devices not supported**: The game relies on precise mouse cursor movement for paddle control
- **Touch controls unavailable**: Currently optimized for mouse-based gameplay only
- **Tablet compatibility limited**: Best experience on traditional desktop/laptop setup

### ⚠️ **Important Note**
This game is designed specifically for **mouse cursor control** and provides the best experience on desktop and laptop computers. Mobile and touch device support may be added in future updates.

## 🚀 Quick Start

### 🎮 Play Online (Recommended)
**Just click and play:** [https://tournamentpong.vercel.app/](https://tournamentpong.vercel.app/)

**Requirements**: Desktop/Laptop with mouse cursor - works on all desktop browsers!

### 💻 Run Locally

#### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

#### Installation Steps
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

## 🌐 Deployment

This project is deployed and hosted on [Vercel](https://vercel.com/) for optimal performance and reliability:

- **Live URL**: [https://tournamentpong.vercel.app/](https://tournamentpong.vercel.app/)
- **Automatic deployments** from the main branch
- **Global CDN** for fast loading worldwide
- **Zero configuration** deployment
- **Mobile optimized** for all devices

## 🔗 Links & Resources

- 🎮 **Live Game**: [https://tournamentpong.vercel.app/](https://tournamentpong.vercel.app/)
- 📱 **Mobile Friendly**: Responsive design works on all devices
- 🌍 **Global Access**: Fast loading worldwide via Vercel CDN
- 📖 **Documentation**: Complete setup and gameplay guide below

---

## 🎮 How to Play

### Controls
- **Mouse Movement**: Move your mouse cursor up and down to control your paddle
- **Spacebar**: Pause/Resume the game
- **Pause Button**: Pause the game
- **New Game Button**: Start a fresh match

> **💡 Pro Tip**: Use smooth mouse movements for better control. The paddle follows your cursor with slight smoothing for realistic feel.

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
tournament-pong/
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

**We welcome contributions from developers of all skill levels!** 🚀

Tournament Pong is an open-source project and we'd love your help to make it even better. Whether you're a beginner or an expert, there are many ways to contribute:

### 🎯 **Easy Ways to Contribute:**
- 🐛 **Report bugs** you find while playing
- 💡 **Suggest new features** or improvements
- 📝 **Improve documentation** or fix typos
- 🎨 **Enhance UI/UX** design elements
- 🤖 **Add new AI commentary** messages
- 🌍 **Translate** the game to other languages

### 💻 **For Developers:**
- 🔧 **Fix existing bugs** from our [Issues](https://github.com/gdvtramarao/tournament-pong/issues)
- ⚡ **Add new game features** (sound effects, new game modes, etc.)
- 📱 **Improve mobile experience** and touch controls
- 🎮 **Add keyboard controls** (WASD, arrow keys)
- 🏆 **Create tournament modes** and scoring systems
- ✨ **Optimize performance** and add animations

### 🚀 **How to Start Contributing:**

1. **⭐ Star this repository** to show your support
2. **🍴 Fork the project** to your GitHub account
3. **📋 Check our [Issues](https://github.com/gdvtramarao/tournament-pong/issues)** for beginner-friendly tasks
4. **🔧 Create a feature branch**: `git checkout -b feature/AmazingFeature`
5. **💾 Commit your changes**: `git commit -m 'Add some AmazingFeature'`
6. **📤 Push to the branch**: `git push origin feature/AmazingFeature`
7. **🔄 Open a Pull Request** with a clear description

### 👥 **First-time Contributors Welcome!**
New to open source? No problem! We have **good first issue** labels to help you get started:

- 🏷️ Look for issues labeled `good first issue`
- 📚 Check our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines
- 💬 Feel free to ask questions in the issues or discussions
- 🤝 We're here to help and guide you through your first contribution!

### 🎁 **What You'll Gain:**
- 🌟 **GitHub contribution history** for your profile
- 📖 **Learn modern web development** with vanilla JavaScript
- 🎮 **Game development experience** with HTML5 Canvas
- 🤖 **AI logic programming** skills
- 👥 **Open source collaboration** experience
- 🏆 **Recognition** as a project contributor

### 💡 **Ideas We'd Love to See:**
- 🔊 **Sound effects** and background music
- ⌨️ **Keyboard controls** for accessibility
- 🎨 **Custom themes** and color schemes
- 👥 **Multiplayer mode** (two human players)
- 📊 **Statistics tracking** and leaderboards
- 📱 **Better touch controls** for mobile
- 🌐 **Internationalization** (multiple languages)
- 🏅 **Achievement system** and badges

### 📞 **Get in Touch:**
- 🐞 **Report Issues**: [GitHub Issues](https://github.com/gdvtramarao/tournament-pong/issues)
- 💬 **Start Discussions**: [GitHub Discussions](https://github.com/gdvtramarao/tournament-pong/discussions)
- 📧 **Contact**: Mention `@gdvtramarao` in issues or PRs

**Ready to contribute? Your next PR could make the game better for thousands of players! 🚀**

---

## 📱 Platform Support

✅ **Desktop Browsers**: Chrome, Firefox, Safari, Edge (Windows, macOS, Linux)  
✅ **Laptop Computers**: Perfect mouse/trackpad control experience  
❌ **Mobile Devices**: Not supported (requires mouse cursor)  
❌ **Tablets**: Limited support (touch controls not available)  
❌ **Smart TVs**: Not optimized for TV browsers  

## 🚀 Performance

- **Lightning Fast**: Hosted on Vercel's global CDN
- **60 FPS Gameplay**: Smooth animations and responsive mouse controls
- **Instant Loading**: No downloads or installations required
- **Desktop Optimized**: Perfect performance on laptop and desktop computers

## 🐛 Known Issues

- On some mobile devices, mouse movement might not be as responsive
- Timer precision may vary slightly between browsers
- Canvas scaling on very small screens (< 320px) needs improvement

## 🔮 Future Enhancements

- [ ] Keyboard controls (WASD or Arrow keys)
- [ ] Multiple difficulty levels
- [ ] Sound effects and background music
- [ ] Multiplayer mode (two human players)
- [ ] **Mobile touch controls** for phone and tablet support
- [ ] Tournament bracket system
- [ ] Score history and statistics
- [ ] Custom themes and color schemes

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

**Share the game:**
- 🎮 [Play Live](https://tournamentpong.vercel.app/)
- 🐦 Tweet about it
- 💬 Tell your friends
- 🔗 Share on social media

---

### 🎯 Ready to Challenge the AI?

**[🚀 PLAY TOURNAMENT PONG NOW](https://tournamentpong.vercel.app/)**

*Test your reflexes against an AI that talks back - show the AI what you're made of!* 🏓
