# Installation Comparison

This document shows how much easier installation becomes with npm publishing.

## Before npm Publishing (Manual Installation)

Users have to follow multiple steps:

### Step 1: Clone or Download
```bash
git clone https://github.com/jach/opencode-browser.git
cd opencode-browser
```

### Step 2: Copy Files Manually
```bash
mkdir -p ~/.config/opencode/plugin
cp index.ts ~/.config/opencode/plugin/browser-mcp.ts
```

### Step 3: Configure OpenCode
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

**Total Steps**: 3 steps, multiple commands, manual file management

---

## After npm Publishing (Automatic Installation)

Users just edit their config file:

### Single Step: Add to OpenCode Config
```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["opencode-browser"],
  "mcp": {
    "browsermcp": {
      "type": "local",
      "command": ["npx", "-y", "@browsermcp/mcp@latest"],
      "enabled": true
    }
  }
}
```

**That's it!** OpenCode automatically:
1. Downloads the plugin from npm
2. Installs it in the cache directory
3. Loads it at startup

**Total Steps**: 1 step, one config change, zero manual file management

---

## Side-by-Side Comparison

| Aspect | Manual Installation | npm Installation |
|--------|-------------------|------------------|
| **Steps** | 3+ steps | 1 step |
| **Commands** | 4+ commands | 1 config edit |
| **File Operations** | Manual copying | Automatic |
| **Updates** | Re-download & copy | Change version |
| **Errors** | File path mistakes | None |
| **Time** | ~3-5 minutes | ~30 seconds |
| **User Experience** | Poor | Excellent |

---

## Update Process Comparison

### Manual Installation Updates

```bash
# User has to remember where they installed it
cd ~/Downloads/opencode-browser
git pull
cp index.ts ~/.config/opencode/plugin/browser-mcp.ts
```

### npm Installation Updates

```json
{
  "plugin": ["opencode-browser@1.2.0"]
}
```

Or just restart OpenCode to get latest version automatically.

---

## Multiple Projects Comparison

### Manual Installation

Each project needs the files copied:
```bash
cd ~/project1 && mkdir -p .opencode/plugin && cp ~/Downloads/index.ts .opencode/plugin/
cd ~/project2 && mkdir -p .opencode/plugin && cp ~/Downloads/index.ts .opencode/plugin/
cd ~/project3 && mkdir -p .opencode/plugin && cp ~/Downloads/index.ts .opencode/plugin/
```

### npm Installation

Same config works everywhere:
```json
{ "plugin": ["opencode-browser"] }
```

---

## Error Scenarios

### Common Manual Installation Errors

1. **Wrong directory**:
   ```
   Error: Plugin not found
   (Copied to wrong location)
   ```

2. **File renamed**:
   ```
   Error: Plugin not loaded
   (Renamed index.ts incorrectly)
   ```

3. **Outdated version**:
   ```
   Warning: Using old plugin version
   (Forgot to update)
   ```

### npm Installation Errors

Almost none! OpenCode handles everything automatically.

---

## Developer Benefits

### Without npm

- Users file issues: "Where do I put the file?"
- Users file issues: "Plugin not loading"
- Users file issues: "How do I update?"
- More support requests
- Poor user experience

### With npm

- Users just add to config
- Automatic version management
- Fewer support requests
- Professional distribution
- Better user experience

---

## Publishing to npm: One-Time Setup

To enable this easy installation for all users:

```bash
# 1. Create npm account (one-time)
npm adduser

# 2. Publish (one-time)
npm publish

# Done! Now users can install with one line of config
```

---

## Recommendation

**Strongly recommend publishing to npm** because:

✅ Users install with one line of config  
✅ Automatic updates  
✅ No manual file management  
✅ Professional distribution  
✅ Better user experience  
✅ Fewer support requests  
✅ Version management built-in  
✅ Works across all projects  

The one-time setup cost is worth the massive improvement in user experience!

---

## See Also

- [PUBLISHING.md](./PUBLISHING.md) - Detailed publishing guide
- [README.md](./README.md) - Installation instructions
- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
