# Publishing to npm

This guide explains how to publish this plugin to npm so users can install it with a single line of configuration.

## Why Publish to npm?

**Before publishing** (manual installation):
```bash
# Users have to manually copy files
mkdir -p .opencode/plugin
cp index.ts .opencode/plugin/browser-mcp.ts
```

**After publishing** (automatic installation):
```json
{
  "plugin": ["opencode-browser"]
}
```

OpenCode automatically downloads and installs npm plugins - no manual file copying needed!

## Prerequisites

1. **npm account** - Create one at https://www.npmjs.com/signup
2. **npm CLI** - Should be installed with Node.js
3. **Git repository** - Recommended for version control

## Publishing Steps

### 1. Prepare Your Package

First, update `package.json` with your details:

```json
{
  "name": "opencode-browser",
  "version": "1.0.0",
  "description": "OpenCode plugin that integrates Browser MCP for browser automation",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/opencode-browser"
  }
}
```

### 2. Test Locally First

Before publishing, test that the plugin works:

```bash
# Install locally
mkdir -p .opencode/plugin
cp index.ts .opencode/plugin/browser-mcp.ts

# Start OpenCode and verify the plugin loads
opencode
```

Look for the log message: "Browser MCP Plugin initialized!"

### 3. Create npm Account and Login

```bash
# Create account (if you don't have one)
npm adduser

# Or login if you already have an account
npm login
```

### 4. Verify Package Contents

Check what will be published:

```bash
npm pack --dry-run
```

This should show:
- index.ts
- package.json
- README.md
- LICENSE

### 5. Publish to npm

```bash
# First publish
npm publish

# If the package name is taken, use a scoped package:
npm publish --access public
```

For scoped packages, update your package name to `@jach/opencode-browser`.

### 6. Verify Publication

Visit your package page:
```
https://www.npmjs.com/package/opencode-browser
```

Or search for it:
```bash
npm search opencode-browser
```

## Using Your Published Plugin

Now users can install your plugin by simply adding it to their `opencode.json`:

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

When OpenCode starts, it will:
1. See `opencode-browser` in the plugin list
2. Run `bun install opencode-browser` automatically
3. Cache it in `~/.cache/opencode/node_modules/`
4. Load the plugin

## Publishing Updates

### Version Numbering

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes

### Update the Version

```bash
# For bug fixes
npm version patch
# Creates version 1.0.1

# For new features
npm version minor
# Creates version 1.1.0

# For breaking changes
npm version major
# Creates version 2.0.0
```

This automatically:
- Updates `package.json`
- Creates a git commit
- Creates a git tag

### Publish the Update

```bash
npm publish
```

### Create a GitHub Release

```bash
# Push the tag to GitHub
git push --tags

# Then create a release on GitHub with release notes
```

## Best Practices

### 1. Add a .npmignore

Create `.npmignore` to exclude unnecessary files:

```
# Test files
test/
*.test.ts
*.spec.ts

# Documentation (except README)
EXAMPLES.md
ARCHITECTURE.md
CONTRIBUTING.md
SUMMARY.md
QUICKSTART.md
GET_STARTED.txt

# Development files
.DS_Store
*.log
tsconfig.json

# Git files
.git/
.gitignore
```

**Important**: Only `index.ts`, `README.md`, `LICENSE`, and `package.json` are needed.

### 2. Add Package Keywords

Good keywords help users find your plugin:

```json
{
  "keywords": [
    "opencode",
    "opencode-plugin",
    "browser-automation",
    "mcp",
    "browser-control",
    "web-automation"
  ]
}
```

### 3. Keep README.md Updated

The README appears on the npm page - keep it comprehensive!

### 4. Add a CHANGELOG.md

Track changes between versions:

```markdown
# Changelog

## [1.0.1] - 2026-01-05
### Fixed
- Fixed session context preservation bug

## [1.0.0] - 2026-01-04
### Added
- Initial release
- Browser MCP integration
- Tool execution hooks
```

### 5. Test Before Publishing

```bash
# Run any tests
npm test

# Check TypeScript compilation
tsc --noEmit

# Test the plugin locally
```

## Scoped Packages

If `opencode-browser` is taken, use a scoped package:

```json
{
  "name": "@jach/opencode-browser"
}
```

Then publish with:
```bash
npm publish --access public
```

Users install with:
```json
{
  "plugin": ["@jach/opencode-browser"]
}
```

## Automated Publishing with GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add your npm token to GitHub secrets:
1. Generate token at https://www.npmjs.com/settings/tokens
2. Add to GitHub: Settings → Secrets → New repository secret
3. Name it `NPM_TOKEN`

## Unpublishing (Emergency Only)

If you need to unpublish (within 72 hours of publishing):

```bash
npm unpublish opencode-browser@1.0.0
```

**Warning**: This is discouraged by npm. It's better to publish a fixed version.

## Getting Help

- **npm Documentation**: https://docs.npmjs.com/
- **OpenCode Plugin Guide**: https://opencode.ai/docs/plugins/
- **Semantic Versioning**: https://semver.org/

## Summary

Publishing to npm makes installation trivial for users:

**Without npm**: Users manually copy files
```bash
mkdir -p .opencode/plugin && cp index.ts .opencode/plugin/browser-mcp.ts
```

**With npm**: Users add one line to config
```json
{ "plugin": ["opencode-browser"] }
```

OpenCode handles the rest automatically!

---

Ready to publish? Just run `npm publish` and make browser automation accessible to everyone!
