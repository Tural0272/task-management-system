project/
├── client/           # Frontend React application
├── server/           # Backend Express server
├── shared/           # Shared TypeScript types
└── docs/            # Documentation and diagrams
```

## Technical Implementation
I chose the following technology stack based on modern web development practices:
- Frontend:
  - React with TanStack Query for efficient data management
  - Tailwind CSS for responsive design
  - TypeScript for type safety
- Backend:
  - Express.js for robust API development
  - Node.js runtime environment
  - TypeScript for consistent type checking
- Authentication:
  - Implemented custom user authentication system
- Data Storage:
  - In-memory storage (expandable to PostgreSQL)

## Features I Implemented
1. User Authentication
   - Secure registration system
   - Login/Logout functionality
   - Session management
2. Task Management
   - Create new tasks
   - View task list
   - Update task status
   - Delete tasks
3. Status Tracking
   - TODO
   - IN_PROGRESS
   - DONE

## Development Insights
During development, I focused on:
- Clean code architecture
- Type safety across the stack
- Responsive design
- Error handling
- Input validation
- Form validation
- API response validation

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm (comes with Node.js)

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## User Stories
Based on my analysis of task management needs, I implemented the following user stories:
1. As a user, I want to register and login to manage my tasks
2. As a user, I want to create new tasks with title and description
3. As a user, I want to view all my tasks in an organized manner
4. As a user, I want to update the status of my tasks
5. As a user, I want to delete tasks that are no longer needed

## Sprint Planning
I organized the development into the following sprints:
- Sprint 1 (Completed)
  - Basic authentication system
  - Task CRUD operations
  - UI implementation
- Sprint 2 (Planned)
  - Advanced filtering
  - Task categories
  - User preferences
- Sprint 3 (Future)
  - Team collaboration features
  - Task sharing
  - Activity logging

## Architecture
I designed the system architecture using draw.io, which can be found in the `docs/architecture.drawio` file. This demonstrates my understanding of system design and component interaction.

## Testing
To run the tests:
```bash
npm test