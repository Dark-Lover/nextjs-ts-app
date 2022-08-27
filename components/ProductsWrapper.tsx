interface ProductWrapperProps {
  children: React.ReactNode;
}

function ProductsWrapper({ children }: ProductWrapperProps) {
  return (
    <div className=" flex justify-center items-center flex-col gap-2 sm:flex-row sm:gap-4 sm:flex-wrap">
      {children}
    </div>
  );
}

export default ProductsWrapper;
