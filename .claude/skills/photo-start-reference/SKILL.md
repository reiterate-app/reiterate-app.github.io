---
name: photo-start-reference
description: Read and reference the Photo Start iOS app repository for documentation purposes. Use when building web pages about Photo Start, understanding features, reading commit history, or referencing implementation details. Read-only access - no editing of the Photo Start codebase.
allowed-tools: Read, Grep, Glob, Bash
---

# Photo Start Reference

This skill provides read-only access to the Photo Start iOS app repository for reference when building documentation and web pages.

## Repository Location

**Path**: `/Users/meckler/Developer/Photo Start`

## Purpose

Use this skill when:
- Building web pages or documentation about Photo Start
- Understanding Photo Start features and capabilities
- Reading commit history and development notes
- Referencing implementation details
- Gathering information about the app's functionality

## Important Notes

- **Read-only access**: This skill is for reference only
- **No editing**: Changes to Photo Start code happen in its own repository
- **Documentation focus**: Use this to build accurate web pages and docs

## Common References

### Viewing commit history
```bash
cd "/Users/meckler/Developer/Photo Start" && git log --oneline -20
```

### Finding feature implementations
Search for specific functionality:
```
Grep pattern: "feature-name" in /Users/meckler/Developer/Photo Start
```

### Understanding project structure
```
Glob pattern: **/*.swift in /Users/meckler/Developer/Photo Start
```

## Example Usage

When the user asks to document Photo Start:
1. Read relevant source files to understand features
2. Review commit messages for development history
3. Examine README or documentation files
4. Use this context to build accurate web pages

## File Paths

All file paths must use the absolute path:
`/Users/meckler/Developer/Photo Start/[file]`

Example:
- `/Users/meckler/Developer/Photo Start/README.md`
- `/Users/meckler/Developer/Photo Start/PhotoStart/Models/`
- `/Users/meckler/Developer/Photo Start/.git/`
