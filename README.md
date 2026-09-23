# ⚡ AARUVI BUILDS

### ⬇️ Button Animation — Series 01

**What if a download button reacted to the way you pressed it?**
**Hold. Release. Download. Complete.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-button-series-01/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-button-series-01">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## ⬇️ The Build

**Button Animation — Series 01** explores a different approach to a familiar download interaction.

Instead of clicking once and immediately showing a loading state, the button responds to a **press-and-hold gesture**.

The interaction moves through multiple states:

```text
DOWNLOAD
   ↓
PRESS
   ↓
RELEASE
   ↓
DOWNLOADING
   ↓
COMPLETE
```

The result is a small but highly visual micro-interaction designed for modern interfaces.

---

## 🎬 The Experience

### 01 — Ready to Download

The interface presents a fictional downloadable asset:

**Brand System**

```text
aaruvi-brand-system.zip
18 files
42.8 MB
```

The primary CTA displays:

**Download**

---

### 02 — Press and Hold

When the user presses the button, it reacts immediately.

The button:

* Compresses slightly
* Changes appearance
* Updates its label to **Release**
* Updates the bottom status message

This makes the interaction feel physical rather than static.

---

### 03 — Release to Start

Once the user releases the button, the download sequence begins.

The button changes to:

**Downloading**

The interface enters a loading state and the progress fill begins moving across the button.

---

### 04 — Download Progress

A purple progress layer expands across the button.

At the same time:

* The button changes state
* The download icon animates
* The interface receives a stronger visual emphasis
* The status changes to **Preparing Download**

---

### 05 — Download Complete

After the progress sequence finishes, the workspace transitions away.

A completion screen appears with:

**DOWNLOAD COMPLETE**

and:

> File is ready.

A success orb with a check mark reinforces the completed state.

---

### 06 — Download Again

The user can restart the experience using:

**Download again**

The interface returns to its initial state and becomes interactive again.

---

## ✨ Interaction System

| Interaction    | Result                    |
| -------------- | ------------------------- |
| Hover          | Button lifts slightly     |
| Press          | Button compresses         |
| Hold           | Label changes to Release  |
| Release        | Download starts           |
| Downloading    | Progress animation begins |
| Complete       | Success screen appears    |
| Download Again | Experience resets         |
| Escape         | Resets the current state  |

---

## 🧠 State System

The JavaScript manages the interaction through three primary states:

```text
IDLE
 │
 │ Press
 ▼
LOADING
 │
 │ 1.45s
 ▼
COMPLETE
 │
 │ Download Again
 ▼
IDLE
```

## The implementation starts in an `idle` state and switches to `loading` after the press-and-release interaction. The completion state is triggered after a 1450ms sequence.

## 🖱️ Press Interaction

The button uses pointer events to support the interaction:

```text
Pointer Down
     ↓
PRESS
     ↓
Pointer Up
     ↓
DOWNLOAD
```

Mouse, touch, and pointer interactions are handled through the Pointer Events API.

The interaction also supports keyboard controls using:

* `Space`
* `Enter`

## This makes the component usable beyond mouse interaction.

## 🎨 Motion Details

### Button Press

The button slightly scales down when pressed.

```text
Normal
  ↓
Scale Down
  ↓
Release
```

### Progress Fill

During the loading state, a purple fill expands across the button:

```text
[████████████████████]
```

The animation runs for approximately **1.45 seconds**.

### Download Icon

The download icon receives a subtle vertical animation while the download is processing.

### Completion Orb

The final success orb uses a scale animation to create a soft pop-in effect when the download completes.

---

## 🖥️ Asset Interface

The build is presented inside a minimal creative asset library.

The interface includes:

* Project Library header
* Ready status
* Brand System asset
* ZIP format indicator
* File information
* Download CTA
* File metadata

The asset information is intentionally presented like a premium creative workspace.

---

## 📦 Asset Details

```text
PROJECT
Brand System

FILE
aaruvi-brand-system.zip

FILES
18

FORMAT
ZIP

SIZE
42.8 MB
```

The values are part of the visual demo interface. They represent the fictional downloadable asset used for the interaction.

---

## 🛠️ Built With

* **HTML5**
* **CSS3**
* **JavaScript**
* CSS Keyframe Animations
* Pointer Events API
* Responsive Design
* Reduced Motion Support

No frameworks are required.

---

## 📱 Responsive

The component adapts for smaller screens.

On mobile:

* The application container becomes wider relative to the viewport
* The asset card can wrap
* The download button expands to full width
* Metadata spacing is reduced
* Navigation elements simplify

This keeps the primary interaction easy to access on smaller screens.

---

## ♿ Reduced Motion

The build includes:

```css
prefers-reduced-motion: reduce
```

When reduced motion is requested, animation and transition durations are reduced significantly.

---

## ♿ Accessibility

The button supports keyboard interaction using:

```text
Space
Enter
Escape
```

The download button also uses `aria-busy` during the loading state to communicate that the interaction is processing.

---

## 📂 Project Structure

```text
aaruvi-builds-button-series-01/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-button-series-01.git
```

Enter the project:

```bash
cd aaruvi-builds-button-series-01
```

Open:

```text
index.html
```

No build tools or dependencies are required.

---

## 🌐 Live Demo

Experience the interaction:

**https://aaruvibuilds.github.io/aaruvi-builds-button-series-01/**

---

## 💻 Source Code

Explore the complete source:

**https://github.com/aaruvibuilds/aaruvi-builds-button-series-01**

---

## 🎯 The Idea

Most download buttons only communicate one thing:

**Click → Download**

This build turns that simple action into a small interaction story:

```text
PRESS
  ↓
FEEDBACK
  ↓
RELEASE
  ↓
PROGRESS
  ↓
SUCCESS
```

The goal is to make a familiar interface element feel more tactile, responsive, and memorable.

---

# ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Building modern web experiences through frontend development, creative UI and smooth motion.

### Connect

* 📸 Instagram — https://instagram.com/aaruvi_builds
* ▶️ YouTube — https://youtube.com/@AaruviBuilds
* 💻 GitHub — https://github.com/aaruvibuilds

---

### BUILD. EXPERIMENT. CREATE.

*Series 01 / Button Animation*
