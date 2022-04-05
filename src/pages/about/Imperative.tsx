import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

type Handle = {
  handleChange: () => void;
  print: () => void;
  open: boolean;
};

const Dog = forwardRef((props, ref: React.ForwardedRef<Handle>) => {
  const [open, setOpen] = useState(false);
  useImperativeHandle(
    ref,
    () => ({
      handleChange: () => {
        setOpen(!open);
      },
      print: () => {
        console.log('useImperativeHandle');
      },
      open: open,
    }),
    [open],
  );

  console.log(open);
  return <div>forwardRef {open && <span>open</span>}</div>;
});

function Animal() {
  const dogRef = useRef<Handle>(null);
  const handleClick = () => {
    dogRef.current?.print();
    dogRef.current?.handleChange();
    console.log(dogRef.current?.open);
  };

  return (
    <div>
      <Dog ref={dogRef} />
      <button onClick={handleClick}>dogClick</button>
    </div>
  );
}

export default Animal;
