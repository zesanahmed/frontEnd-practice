const Container = ({ children }) => {
  return (
    <div className="w-full  max-w-[1220px] mx-auto flex items-center justify-between">
      {children}
    </div>
  );
};

export default Container;
