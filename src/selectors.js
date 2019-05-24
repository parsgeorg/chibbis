export const getReviews = state => {
    return state.items.filter(item => item.isPositive === 'Да');
  };
