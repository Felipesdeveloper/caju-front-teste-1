import * as S from './RowStyles';
import { Props } from './RowTypes';

const Row = ({ width, height }: Props) => {
  return (
    <S.Animate>
      <svg
        width={width}
        height={height}
        preserveAspectRatio="none"
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={width} height={height} fill="#ced1da" />
      </svg>
    </S.Animate>
  );
};

export default Row;
