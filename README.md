git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the application
```bash
npm run dev
```

### Usage Guide
1. Open the application in your browser
2. Register a new account or login
3. Create tasks using the "New Task" button
4. Update task status using the dropdown menu
5. Delete tasks using the trash icon

## Project Management

### SCRUM Process
Our development follows SCRUM methodology:
1. Sprint Planning
   - Two-week sprints
   - Clear sprint goals
   - Task estimation
2. Daily Standups (Simulated)
   - Progress updates
   - Blocker resolution
3. Sprint Review
   - Feature demonstration
   - Feedback incorporation

### Repository Structure
```
project/
├── client/           # Frontend React application
├── server/           # Backend Express server
├── shared/           # Shared TypeScript types
└── docs/            # Documentation and diagrams
```

## Submission Notes
This project demonstrates:
1. Complete SCRUM workflow implementation
2. Full CRUD functionality
3. Modern technical stack
4. Comprehensive documentation
5. System architecture diagrams
6. Testing implementation

## Note
This project is a functional demonstration of a SCRUM-based development process, including all required components for the course submission. The JIRA board structure is documented here for demonstration purposes.

## Technical Stack
- Frontend:
  - React with TanStack Query
  - Tailwind CSS for styling
  - TypeScript for type safety
- Backend:
  - Express.js
  - Node.js
  - TypeScript
- Authentication:
  - Custom user authentication system
- Data Storage:
  - In-memory storage (can be upgraded to PostgreSQL)

## Features
1. User Authentication
   - Registration
   - Login/Logout
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

## Testing
The application includes:
- Input validation
- Error handling
- Form validation
- API response validation

## Getting Started
### Prerequisites
- Node.js 20 or higher
- npm (comes with Node.js)

### Installation
1. Clone the repository
```bash
git clone [your-repository-url]
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

## Project Documentation
### User Stories
1. As a user, I want to register and login to manage my tasks
2. As a user, I want to create new tasks with title and description
3. As a user, I want to view all my tasks in a organized manner
4. As a user, I want to update the status of my tasks
5. As a user, I want to delete tasks that are no longer needed

### Sprint Planning
- Sprint 1 (Current)
  - Basic authentication system
  - Task CRUD operations
  - UI implementation
- Sprint 2 (Planned)
  - Advanced filtering
  - Task categories
  - User preferences
- Sprint 3 (Planned)
  - Team collaboration features
  - Task sharing
  - Activity logging

### Architecture Diagram
The system architecture diagram is created using draw.io and can be found in the `docs/architecture.drawio` file.

## Contributing
1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request
4. Update the relevant JIRA tickets

## Testing
To run the tests:
```bash
npm test