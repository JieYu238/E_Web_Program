## Key Differences Between Issues and Pull Requests

| **Aspect**            | **Issues**                                      | **Pull Requests (PRs)**                             |
|-----------------------|-------------------------------------------------|----------------------------------------------------|
| **Primary Purpose**    | Tracking tasks, bugs, features, and discussions | Proposing, reviewing, and merging code changes     |
| **What is Tracked**    | Bugs, features, tasks, discussions              | Code changes between branches                      |
| **Assigned To**        | Can be assigned to anyone to address a task     | Assigned to a reviewer for code review             |
| **Completion**         | Closed when the task is completed               | Merged when code is reviewed and ready for main branch |
| **Collaboration**      | Communication through comments and labels       | Communication through code review and feedback     |
| **Status**             | Can use labels like **To-Do**, **In Progress**, **Done** | Shows whether the PR is **open**, **merged**, or **closed** |
| **Integration with Code** | Not directly related to code changes            | Directly related to code changes (merging code)    |

---

### How They Work Together:

- **Issues** often precede **Pull Requests**. For example, an issue might be created to track a bug or new feature request. After working on the feature or fixing the bug in a separate branch, a **Pull Request** is created to merge those changes back into the main branch.
  
- **PRs** can be linked to **Issues**. When creating a PR, you can reference an issue by mentioning it in the PR description (e.g., "Fixes #123" where `#123` is the issue number). This shows the connection between the task being tracked in the issue and the code changes in the PR.

- **Code Review** happens within **Pull Requests**, while **Issues** are more about organizing tasks and tracking progress.
