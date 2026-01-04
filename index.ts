import type { Plugin } from "@opencode-ai/plugin"

/**
 * OpenCode Plugin for Browser MCP Integration
 * 
 * This plugin integrates Browser MCP (https://browsermcp.io) to enable browser automation
 * capabilities within OpenCode. It allows the AI to control a browser, navigate websites,
 * fill forms, click elements, and perform other browser automation tasks.
 * 
 * Setup:
 * 1. Install the Browser MCP extension in your browser
 * 2. Configure the MCP server in your opencode.json (see README.md)
 * 3. Enable this plugin
 * 
 * The plugin automatically detects browser-related requests and provides context hints
 * to help the AI use Browser MCP tools effectively.
 */
export const BrowserMCPPlugin: Plugin = async (ctx) => {
  const { client, project } = ctx
  
  // Track if we've informed the user about browser automation capabilities
  let browserCapabilitiesShown = false
  
  return {
    /**
     * Hook into session creation to inject browser automation context
     */
    "session.created": async ({ session }) => {
      // Session created - ready for browser automation
    },
    
    /**
     * Hook before tool execution to provide browser-specific guidance
     */
    "tool.execute.before": async (input, output) => {
      // Detect if a browser-related MCP tool is being called
      if (input.tool.startsWith("browsermcp_")) {
        // Browser tool execution starting
      }
    },
    
    /**
     * Hook after tool execution to handle browser automation results
     */
    "tool.execute.after": async (input, output) => {
      if (input.tool.startsWith("browsermcp_")) {
        // You can add custom post-processing here, such as:
        // - Logging results to a file
        // - Sending notifications
        // - Updating external systems
      }
    },
    
    /**
     * Hook to add browser automation context during session compaction
     * This helps preserve browser-related context across long sessions
     */
    "experimental.session.compacting": async (input, output) => {
      // Check if any browser automation was performed in this session
      const hasBrowserTools = input.messages.some(msg => 
        msg.content?.some(part => 
          part.type === "tool_use" && part.name?.startsWith("browsermcp_")
        )
      )
      
      if (hasBrowserTools) {
        output.context.push(`## Browser Automation Context

The Browser MCP integration has been used in this session. When resuming:
- Browser state may have changed since last interaction
- Browser tabs opened during automation may still be active
- Consider checking current browser state before making assumptions
- Use Browser MCP tools to verify page state when needed`)
      }
    },
    
    /**
     * Hook into TUI toast notifications to show browser-specific tips
     */
    "tui.toast.show": async (input, output) => {
      // You could customize toast messages related to browser automation here
    },
    
    /**
     * Event handler for various OpenCode events
     */
    event: async ({ event }) => {
      // Handle session idle - could be used to close browser tabs
      if (event.type === "session.idle") {
        // Session is idle
      }
      
      // Handle session errors - could help debug browser automation issues
      if (event.type === "session.error") {
        // Session error occurred
      }
    }
  }
}

/**
 * Default export for the plugin
 */
export default BrowserMCPPlugin
