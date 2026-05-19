# Infinite Scroll with TanStack Query (Practical 5)

##  Overview
This project demonstrates how to implement **infinite scrolling** in a TikTok-style application using **TanStack Query (React Query)** with **cursor-based pagination**. The goal is to provide a smooth, endless scrolling experience that efficiently handles large datasets.


## Key Concepts

### Cursor-Based vs Offset-Based Pagination
- **Offset-Based Pagination**
  - Uses `page` + `limit` parameters.
  - Simple but inefficient for large datasets.
  - Can break when items are added/removed.

- **Cursor-Based Pagination**
  - Uses a unique identifier (`cursor`) + `limit`.
  - More efficient and consistent.
  - Ideal for infinite scroll interfaces.

For this project, **cursor-based pagination** is used because it ensures smooth scrolling and handles new content correctly.


## ⚙️ Backend Implementation

1. **Update Video Controller**
   - Modify `getAllVideos` to use `cursor` and `limit`.
   - Return `nextCursor` and `hasNextPage`.

2. **Update Following Videos Controller**
   - Apply the same cursor-based logic to `getFollowingVideos`.

3. **Database Queries**
   - Use Prisma’s `cursor` + `skip` for efficient pagination.
   - Implement the **n+1 pattern** to check if more items exist.



##  Frontend Implementation

1. **Install Dependencies**
   ```bash
   npm install @tanstack/react-query @tanstack/react-query-devtools
2. Set Up Query Client
- Wrap your app with QueryClientProvider in src/app/layout.js.

3. Update Video Service
- Fetch videos using cursor instead of page.

4. Create Intersection Observer Hook
- Add src/hooks/useIntersectionObserver.js to detect when the user reaches the bottom of the feed.

5. Update VideoFeed Component
- Use useInfiniteQuery to manage paginated data.
- Attach the Intersection Observer to trigger fetchNextPage.

# Resources
TanStack Query Documentation

useInfiniteQuery Guide

Intersection Observer API

Prisma Cursor-Based Pagination

Next.js App Router Docs