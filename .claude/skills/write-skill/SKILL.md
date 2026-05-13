---
name: write-skill
description: Write or revise agent (.claude/agents/*.md) and skill (.claude/skills/<name>/SKILL.md) definition files. Optimizes for token efficiency.
---

## Principles

Specify outcomes and constraints, not procedures. The agent knows how to code — tell it what to avoid, not how to work.

Every token must be load-bearing:
- Facts the agent can't infer (stack versions, file paths, build commands)
- Constraints that override default behavior
- Routing signals in frontmatter description

## Structure

Agents: `.claude/agents/<name>.md` with YAML frontmatter (`name`, `description`) followed by body sections.
Skills: `.claude/skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`) followed by body sections. Folder name must match `name` field.

Section headings are useful for grouping. Bullet markers, bold labels, and prose paragraphs are not.

## Writing Constraints

Never:
- write procedural steps — agents know how to implement
- duplicate information already in the frontmatter description
- add inline explanations when the constraint is self-evident
- repeat a prefix across list items — factor it into a heading (e.g. `Never:` + bullet list)
- include feature-specific or one-file-specific patterns — those belong in the code, not the prompt
- add human-readable formatting (bold, tables, numbered lists) that doesn't change agent behavior
- write "anti-rationalization" tables or restated rules — say it once

## Review Checklist

When revising an existing file, delete any line where the answer to "does removing this change agent behavior?" is no.
