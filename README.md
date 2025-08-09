# Obsidian TTRPG Linked Ledger

This repository contains a customized **Obsidian** vault designed for running and tracking tabletop RPG campaigns without a lot of fluff. I prefer function over form, so it's very bare bones but has some nice automated features.
It includes automated note creation, session linking, and visual enhancements to make campaign management faster and more immersive.

---

## 📂 Folder Structure

### Compendium
The **Compendium** serves as the master reference for your world.  
It contains lore, locations, characters, and campaign details, organized into subfolders:

- **Atlas** — Maps, regions, and geographical notes.
- **Lore**
  - **Deities** — Gods, pantheons, divine lore.
  - **Events** — Major historical or ongoing events.
  - **Myths** — Legends, cultural tales, and rumors.
  - **Objects & Items** — Magic items, artifacts, important gear.
- **NPCs**
  - **Noteworthy Folk** — Named characters of interest.
- **Party**
  - **Player Characters** — PCs and their notes.
  - **Quests** — Active and completed quests.
  - **Rumors** — Unverified or speculative information.
- **Villains** — Major antagonists.

---

## 📝 Session Notes Automation

### Session_Notes Folder
- Contains the **New Session Note** button.
- **Clicking this button will automatically:**
  - Create a new session note file.
  - Increment the session number (e.g., `Session_01`, `Session_02`, etc.).
  - Set the date property automatically.

---

## 🔗 Automatic Linking via Dataview

Whenever a **Compendium entry** (character, location, item, etc.) is mentioned in a session note:
- A backlink to that session note will be **automatically added** to the relevant Compendium page.
- This creates a living record of where and when each entity appeared.

Example:  
If "Alaric Vane" is mentioned in `Session_01`, the "Alaric Vane" note in **Villains** will show that connection without manual linking.

---

## 🌐 Graph View Customization

The **Obsidian Graph View** has been customized:
- Parent folders are represented by **icons** instead of the default circular nodes.
- This makes it easier to visually navigate by category (e.g., 📜 for Lore, 🎭 for NPCs).

---
## 🔌 Community Plugins Used

This vault uses the following community plugins to power automation, linking, and visual enhancements:

1. **Buttons** (by shabegom) — Create interactive buttons in notes to run commands, open links, or insert templates.  
   *Used for the "New Session Note" button that auto-generates incremented session logs.*

2. **Dataview** (by Michael Brenan) — Create powerful, dynamic views of your notes using queries.  
   *Used to automatically list all session notes that reference a specific NPC, location, or item.*

3. **Editing Toolbar** (by Cuman) — Adds a customizable MS Word-like editing toolbar to Obsidian for faster formatting and editing.  

4. **Extended Graph** (by Kapirklaa) — Expands the core Graph View with extra features like images, custom node shapes, state management, and link removal.  
   *Used to replace default circle nodes with folder icons with Iconize.*

5. **Folder Notes** (by Lost Paul) — Allows creation of notes tied directly to folders, similar to Notion’s functionality.  

6. **Global Search and Replace** (by Mahmoud Fawzy Khalil) — Perform search-and-replace operations across the entire vault.  

7. **Hierarchical Backlinks** (by Jason Motylinski) — Displays backlinks in a tree-like hierarchy for clearer context navigation.  

8. **Iconize** (by Florian Woelki) — Add custom icons to files, folders, and text elements.  
   *Used to visually distinguish top-level folders in Graph View.*

9. **Note Linker** (by Alexander Weichart) — Automatically detects references to other notes and creates links.  
   *Core to the automatic Compendium linking system.*

10. **Templater** (by SilentVoid) — Advanced template management for automating note creation and content insertion.  
    *Used for session note templates and standardized compendium entries.*

---
## 🚀 Getting Started

1. **Clone or download** this vault from GitHub.
2. Open in **Obsidian**.
3. Install the following community plugins (if not already installed):
   - **Dataview**
   - **Templater**
   - **Folder Icons** (or equivalent)
4. Click the **New Session Note** button to start logging sessions.
5. Use the **Compendium** for world-building and reference.

---

## 📌 Tips & Best Practices

- Mention characters, places, and items consistently in session notes to ensure proper linking.
- Use aliases in properties so that multiple names for the same entity link correctly.
- Regularly review the Graph View to spot underdeveloped parts of your world.

---