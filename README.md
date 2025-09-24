# DataVinci Assignment Reference Document

## **Task 1: Responsive Layout Implementation (Desktop & Mobile)**

### 🎯 Objective

Implement the provided UI/UX design for both **Desktop** and **Mobile** views based on the shared **Figma file**.

### 📌 Key Points to Consider

1. **Understand the Figma Design**
    - Analyze spacing, typography, colors, and component hierarchy.
    - Identify breakpoints for responsiveness (e.g., `>1024px` for desktop, `<768px` for mobile).
2. **Responsive Design Approach**
    - **Mobile-first**: Start styling for smaller screens, then scale up.
    - Use **Flexbox** and **CSS Grid** for layouts.
    - Ensure consistent padding/margins across devices.
3. **UI Elements to Implement**
    - Navigation bar: Should collapse into a hamburger menu for mobile.
    - Content sections: Must reflow gracefully from multi-column (desktop) to single-column (mobile).
    - Buttons & Inputs: Should scale and maintain accessibility.
4. **Accessibility Considerations**
    - Ensure text is legible (minimum font size for mobile).
    - Proper color contrast as per WCAG guidelines.
    - Keyboard navigation should work.
5. **Testing & Verification**
    - Test in multiple devices or simulators (Chrome DevTools, Safari responsive design mode).
    - Verify that the design matches pixel-perfect alignment with Figma.

Figma File : https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-2&t=rGX2823gt6Uba7uJ-0

Techstacks: ReactJS



# **Task 2: Nested Checkbox Component**

### 🎯 Objective

Fix the logic of the **nested checkbox component** where selecting parent categories should automatically check all children, and selecting “Select All” should select everything.

### 📌 Intended Behavior

1. **Select All Checkbox**
    - When checked: All categories (Fruits, Vegetables) and all individual items should be checked.
    - When unchecked: All should be deselected.
2. **Parent Category Checkbox (e.g., Fruits / Vegetables)**
    - When checked: All child items under that category should be checked.
    - When unchecked: All child items under that category should be unchecked.
3. **Child Checkbox (e.g., Apple, Banana, Carrot, etc.)**
    - When individual items are selected, the parent should automatically reflect the correct state:
        - **All children selected** → Parent should be checked.
        - **Some children selected** → Parent should be in an **indeterminate state**.
        - **No children selected** → Parent should be unchecked.

### 📌 Implementation Reference

- Use a **tree-like data structure** to manage nested levels.
- Keep track of **three states**: checked, unchecked, indeterminate.
- On user interaction, propagate the state both **downward** (from parent to children) and **upward** (from children to parent).

### 📌 Testing Scenarios

- Select "Select All" → Every checkbox must be checked.
- Deselect "Select All" → Every checkbox must be unchecked.
- Select "Fruits" → All fruits must be selected.
- Unselect "Fruits" → All fruits must be deselected.
- Select some fruits (e.g., Apple & Banana) → "Fruits" should be **indeterminate**.

You can view the existing code here: https://docs.google.com/document/d/14pNhLzdY9FUBYrmKv7EwuTOn1HVbg8ZGSGNHoNrH--o/edit?usp=sharing
