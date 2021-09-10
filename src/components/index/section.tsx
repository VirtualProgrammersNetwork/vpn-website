import { ReactNode } from 'react';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode | undefined;
}): JSX.Element => {
  const checkedChildren = children || <p>Comming soon...</p>;
  return (
    <div className="m-0">
      <h2 className="m-0">
        def <div className="inline text-blue-600">{title}</div>():
      </h2>
      <div className="pl-14">{checkedChildren}</div>
    </div>
  );
};

export default Section;
