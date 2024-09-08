global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]), // Provide mock data or empty array
    })
  );
  