# Publishing Instructions for opencode-browser

The package has been renamed to `opencode-browser` and is ready to publish to npm!

## What's Been Done

✅ Renamed package from `opencode-browser-mcp` to `opencode-browser`
✅ Updated all documentation references
✅ Updated all configuration examples  
✅ Fixed package.json with correct GitHub URLs
✅ Verified package contents (4 files: index.ts, README.md, LICENSE, package.json)

## To Publish to npm

### Step 1: Login to npm

If you haven't logged in yet:

```bash
npm login
```

This will prompt for:
- Username
- Password  
- Email
- One-time password (if 2FA is enabled)

### Step 2: Verify You're Logged In

```bash
npm whoami
```

Should display your npm username.

### Step 3: Publish

```bash
npm publish
```

This will:
- Package the plugin (13.8 kB unpacked)
- Upload to npm registry
- Make it available as `opencode-browser`

### Step 4: Verify Publication

Visit: https://www.npmjs.com/package/opencode-browser

Or search:
```bash
npm view opencode-browser
```

## After Publishing

Users can now install with ONE line in their `opencode.json`:

```json
{
  "plugin": ["opencode-browser"]
}
```

That's it! OpenCode will automatically:
1. Download from npm
2. Install to cache
3. Load the plugin

## Package Details

- **Name**: opencode-browser
- **Version**: 1.0.0
- **Size**: 5.0 kB (packaged), 13.8 kB (unpacked)
- **Files**: 4 (index.ts, README.md, LICENSE, package.json)
- **Repository**: https://github.com/jach/opencode-browser
- **License**: MIT

## Testing After Publication

Create a test project:

```bash
mkdir test-opencode-browser
cd test-opencode-browser
cat > opencode.json << 'EOFTEST'
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
EOFTEST

opencode
```

Look for: "Browser MCP Plugin initialized!"

Then try:
```
Navigate to github.com and search for opencode
```

## Updating the Package

To publish updates:

```bash
# Update version
npm version patch  # 1.0.0 -> 1.0.1
# or
npm version minor  # 1.0.0 -> 1.1.0
# or  
npm version major  # 1.0.0 -> 2.0.0

# Publish
npm publish
```

## Package URLs

- **npm page**: https://www.npmjs.com/package/opencode-browser
- **GitHub**: https://github.com/jach/opencode-browser
- **Install**: Just add to opencode.json: `"plugin": ["opencode-browser"]`

## Troubleshooting

### "401 Unauthorized"
Run `npm login` to authenticate.

### "404 Not Found"  
Package name might be taken. Try a scoped package: `@jach/opencode-browser`

### "403 Forbidden"
You don't have permission. Make sure you're logged in as the correct user.

## What Users Get

After adding `"plugin": ["opencode-browser"]` to their config:

✅ Automatic installation - No manual file copying
✅ Automatic updates - Just restart OpenCode  
✅ Professional experience - Works like any other npm package
✅ Browser automation - Control browser via natural language
✅ Session context - Browser state preserved across sessions

## Success!

Once published, your plugin will be available to the entire OpenCode community! 🎉

Users around the world can start automating their browsers with just one line of config.

