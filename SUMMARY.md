# OpenCode Browser MCP Plugin - Project Summary

## Overview

This is a complete OpenCode plugin that integrates Browser MCP (Model Context Protocol) to enable browser automation capabilities within OpenCode. The plugin allows AI agents to control web browsers, navigate websites, fill forms, click elements, and perform various browser automation tasks.

## What's Included

### Core Files

1. **index.ts** - Main plugin implementation
   - Browser MCP integration hooks
   - Session context preservation
   - Tool execution monitoring
   - Event handling

2. **package.json** - NPM package configuration
   - Plugin metadata
   - Peer dependencies
   - Publishing configuration

3. **tsconfig.json** - TypeScript configuration
   - Strict type checking
   - ES2022 target
   - Module resolution settings

### Documentation Files

4. **README.md** - Complete documentation
   - Installation instructions
   - Configuration options
   - Usage examples
   - Troubleshooting guide

5. **QUICKSTART.md** - 5-minute setup guide
   - Step-by-step installation
   - Quick verification
   - Common issues and fixes

6. **EXAMPLES.md** - Usage examples and scenarios
   - Basic navigation
   - Form automation
   - Web scraping
   - Testing scenarios
   - Advanced workflows

### Configuration Files

7. **opencode.json.example** - Example OpenCode configuration
   - MCP server setup
   - Plugin configuration
   - Agent definitions

8. **LICENSE** - MIT License

9. **.gitignore** - Git ignore rules

## Key Features

### 1. Browser Automation
- Navigate to URLs
- Click elements
- Fill forms
- Extract data
- Take screenshots
- Handle multiple tabs

### 2. OpenCode Integration
- Automatic tool detection
- Session context preservation
- Compaction hook support
- Event-driven architecture

### 3. Developer Experience
- TypeScript support
- Comprehensive logging
- Error handling
- Flexible configuration

## Architecture

```
┌─────────────────┐
│   OpenCode      │
│     Agent       │
└────────┬────────┘
         │
         ├─ Uses Plugin Hooks
         │
┌────────▼────────┐
│  Browser MCP    │
│     Plugin      │
└────────┬────────┘
         │
         ├─ Monitors Tools
         ├─ Preserves Context
         └─ Handles Events
         │
┌────────▼────────┐
│   Browser MCP   │
│     Server      │
└────────┬────────┘
         │
         ├─ npx @browsermcp/mcp
         │
┌────────▼────────┐
│   Browser MCP   │
│   Extension     │
└────────┬────────┘
         │
┌────────▼────────┐
│  Chrome/Edge    │
│    Browser      │
└─────────────────┘
```

## Installation Methods

### Method 1: Local Plugin (Development)
```bash
mkdir -p .opencode/plugin
cp index.ts .opencode/plugin/browser-mcp.ts
```

### Method 2: Global Plugin
```bash
mkdir -p ~/.config/opencode/plugin
cp index.ts ~/.config/opencode/plugin/browser-mcp.ts
```

### Method 3: NPM Package (Future)
```bash
# In opencode.json
{
  "plugin": ["opencode-browser"]
}
```

## Configuration

Minimal configuration in `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "browsermcp": {
      "type": "local",
      "command": ["npx", "-y", "@browsermcp/mcp@latest"],
      "enabled": true
    }
  }
}
```

## Usage Examples

### Simple Navigation
```
Go to github.com and search for "opencode"
```

### Form Automation
```
Navigate to the contact form and fill in:
- Name: John Doe
- Email: john@example.com
Then submit it.
```

### Web Scraping
```
Visit news.ycombinator.com and list the top 5 stories
```

## Plugin Hooks Used

1. **session.created** - Initialize session state
2. **tool.execute.before** - Pre-process browser tools
3. **tool.execute.after** - Post-process results
4. **experimental.session.compacting** - Preserve browser context
5. **event** - Handle OpenCode events

## Technologies

- **OpenCode**: AI coding agent platform
- **Browser MCP**: Browser automation protocol
- **TypeScript**: Type-safe plugin development
- **Node.js**: Runtime environment
- **npx**: Package execution

## Benefits

### For Users
- Automate repetitive browser tasks
- Test web applications
- Scrape data from websites
- Monitor website changes
- Automate form submissions

### For Developers
- Type-safe plugin development
- Well-documented APIs
- Flexible configuration
- Easy to extend
- Open source

## Roadmap

### Future Enhancements
- [ ] Custom tool definitions for common browser actions
- [ ] Screenshot comparison utilities
- [ ] Browser state persistence
- [ ] Multi-browser support (Firefox, Safari)
- [ ] Performance monitoring integration
- [ ] Browser console log capture
- [ ] Network request interception
- [ ] Cookie management utilities

### Community Contributions Welcome
- Additional examples
- Platform-specific guides
- Integration tutorials
- Bug fixes and improvements

## Related Projects

- [Browser MCP](https://browsermcp.io) - Browser automation via MCP
- [OpenCode](https://opencode.ai) - AI coding agent
- [Model Context Protocol](https://modelcontextprotocol.io/) - MCP specification

## Support and Resources

- **Browser MCP Docs**: https://docs.browsermcp.io/
- **OpenCode Docs**: https://opencode.ai/docs/
- **OpenCode Plugins Guide**: https://opencode.ai/docs/plugins/
- **MCP Servers Guide**: https://opencode.ai/docs/mcp-servers/

## License

MIT License - Free to use, modify, and distribute

## Author

Created as an example of OpenCode plugin development with Browser MCP integration.

---

**Ready to automate your browser with AI?** Check out the [QUICKSTART.md](./QUICKSTART.md) to get started in 5 minutes!
