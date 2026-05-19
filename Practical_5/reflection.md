# Reflection on Practical 5: Infinite Scroll with TanStack Query

## Learning Experience
This assignment was more than just a technical exercise; it was a journey in problem-solving and adaptability. Implementing infinite scroll with TanStack Query challenged me to think critically about how data flows between the backend and frontend, and how user experience can be optimized through efficient design choices.

## Technical Insights
- **Backend Growth**: Learning to implement cursor-based pagination taught me how to handle large datasets gracefully. I gained confidence in using Prisma’s `cursor` and `skip` features, and the n+1 pattern showed me how small design decisions can have a big impact on scalability.
- **Frontend Growth**: Transitioning from `useQuery` to `useInfiniteQuery` felt like leveling up my React Query skills. I realized how powerful TanStack Query is for managing state and caching. The Intersection Observer API also expanded my toolkit, showing me how modern browser features can replace older, less efficient approaches.

## Challenges and Overcoming Them
- At first, I struggled with understanding how `nextCursor` and `hasNextPage` should be structured in the backend response. Debugging this taught me patience and the importance of testing incrementally.
- Setting up the Intersection Observer was a mental shift. Instead of relying on traditional scroll events, I had to embrace a more declarative mindset. This challenged me to trust the browser’s built-in capabilities and think in terms of clean, efficient code.

##  Key Takeaways
- Infinite scroll is not just a feature — it’s a design philosophy that prioritizes seamless user experience.
- Cursor-based pagination is a practical solution for dynamic datasets, and I now feel confident applying it in future projects.
- Modern tools like TanStack Query and Intersection Observer simplify complex problems, but they require a willingness to learn new paradigms.

##  Personal Growth Perspective
This practical helped me grow beyond just writing code:
- **Confidence**: I now feel more capable of tackling advanced frontend-backend integrations. What seemed intimidating at first became manageable once I broke the problem into smaller steps.
- **Problem-Solving Mindset**: I learned to approach challenges systematically — test small changes, validate assumptions, and iterate. This mindset will serve me well in both academic and professional projects.
- **Adaptability**: Switching from offset-based to cursor-based pagination reminded me that the “simplest” solution isn’t always the best. Being open to new approaches is essential for growth as a developer.
- **Resilience**: Debugging and overcoming errors reinforced that setbacks are part of the learning process. Each obstacle became an opportunity to deepen my understanding.

## Reflection
Overall, this assignment was a turning point in how I view my development journey. It wasn’t just about implementing infinite scroll — it was about building confidence, embracing modern tools, and realizing that growth comes from tackling challenges head-on. I now see myself not just as someone who can follow instructions, but as a developer capable of designing efficient, user-friendly solutions.

