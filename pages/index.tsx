import Hero from '../components/Hero';
import Seo from '../components/SEO';
import Trending from '../components/Trending';

// import type { RootState } from '../store';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../store/slices/counterSlice';

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      <Seo />
      <Hero />
      <Trending />
      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}
    </>
  );
}
