# Sue's Portfolio Development Roadmap

## Architecture
- Next.js with App Router
- Shadcn/UI components
- Framer Motion for animations
- Responsive design (mobile, tablet, desktop)
- Dark/light mode with theme switcher

## Color Palette
- Primary: Ivory (light mode), AMOLED Black (dark mode)
- Accent colors: #BF44CA, #9950A0, #E42AF5, #3C3B3B
- Minimal use of accent colors to maintain clean aesthetic

## Components Structure
```
/components
  /layout
    Header.tsx
    Footer.tsx
    ThemeProvider.tsx
    ThemeSwitcher.tsx
  /sections
    Hero.tsx
    Projects.tsx
    Skills.tsx
    Education.tsx
    Coursework.tsx
    Contact.tsx
  /ui
    (shadcn components)
```

## Implementation Order
1. Setup project structure
2. Create theme provider and switcher
3. Implement layout components
4. Build section components:
   - Hero section with profile picture and resume download
   - Projects showcase
   - Skills display
   - Education timeline
   - Coursework grid
   - Contact form (boilerplate)
5. Add animations and transitions
6. Optimize for performance
7. Final testing and review

## Shadcn Components to Use
- Button (for CTA and resume download)
- Card (for projects)
- Form components (for contact)
- Tabs (for organizing sections on mobile)
- Avatar (for profile picture)
- Badge (for skills)
- Sheet/Dialog (for mobile navigation)
- Separator (for section dividers)
- Toggle (for theme switch)
