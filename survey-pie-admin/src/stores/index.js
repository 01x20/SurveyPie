import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import surveySlice from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveySlice,
  },
  middleware: (getFalutMiddleware) => getFalutMiddleware().concat(thunk),
});
