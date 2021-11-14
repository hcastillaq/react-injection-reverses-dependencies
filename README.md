# React -Uncouples, injects and reverses dependencies

That idea is uncoupling, injection and reverses of dependencies in react, using context, servicios and repositories.

link of the post: [https://hcastillaq.medium.com/react-uncouples-injects-and-reverses-dependencies-2103cfd0341f](https://hcastillaq.medium.com/react-uncouples-injects-and-reverses-dependencies-2103cfd0341f)

### install
```
yarn install
```

### Test
```
yarn test
```
### Change repository
src/index.tsx
```
const repository = new TodoInLocalStorageRepository(); // or TodoInMemoryRepository 
const todoService = new TodoService(repository);
```