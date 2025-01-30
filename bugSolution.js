```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count);
  }, [count]); // Correct dependency: only runs when 'count' changes

  // Alternatively, for optimization:
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []); // Empty dependency array: runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```