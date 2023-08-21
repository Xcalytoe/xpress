import React from 'react';
import { styled } from 'styled-components';

const ProfileImage = ({
  name,
  dimenssion,
  color,
}: {
  name: string;
  dimenssion?: string;
  color?: string;
}) => {
  const image = `https://ui-avatars.com/api/?name=${name}&background=${
    color ?? '039BF0'
  }&color=fff&size=${dimenssion ?? 44}`;

  return (
    <StyledImg>
      <img src={image} alt={name} />
    </StyledImg>
  );
};

export default ProfileImage;
const StyledImg = styled.div`
  img {
    border-radius: 50%;
    border: 1px solid var(--btn-text-hover);
  }
`;
