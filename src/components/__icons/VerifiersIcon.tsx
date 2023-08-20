import React from 'react';

const VerifiersIcon = ({ isActive }: { isActive?: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0972 13.6699C15.6083 13.1806 15.0371 12.7813 14.4097 12.4902C15.2945 11.7734 15.8589 10.6797 15.8589 9.45309C15.8589 7.28903 14.0542 5.51364 11.8902 5.54684C9.75933 5.58005 8.04253 7.31638 8.04253 9.45309C8.04253 10.6797 8.60894 11.7734 9.49175 12.4902C8.86422 12.7811 8.29296 13.1804 7.80425 13.6699C6.73784 14.7383 6.13237 16.1484 6.09331 17.6523C6.09279 17.6732 6.09645 17.6939 6.10406 17.7133C6.11168 17.7327 6.12311 17.7504 6.13767 17.7653C6.15223 17.7803 6.16963 17.7921 6.18885 17.8002C6.20807 17.8083 6.22871 17.8125 6.24956 17.8125H7.34331C7.4273 17.8125 7.49761 17.7461 7.49956 17.6621C7.53667 16.5293 7.99566 15.4687 8.8023 14.664C9.21507 14.2491 9.70605 13.9201 10.2468 13.6961C10.7876 13.4722 11.3674 13.3577 11.9527 13.3593C13.1421 13.3593 14.2613 13.8222 15.1031 14.664C15.9078 15.4687 16.3667 16.5293 16.4058 17.6621C16.4078 17.7461 16.4781 17.8125 16.5621 17.8125H17.6558C17.6767 17.8125 17.6973 17.8083 17.7165 17.8002C17.7357 17.7921 17.7531 17.7803 17.7677 17.7653C17.7823 17.7504 17.7937 17.7327 17.8013 17.7133C17.8089 17.6939 17.8126 17.6732 17.8121 17.6523C17.773 16.1484 17.1675 14.7383 16.0972 13.6699ZM11.9527 11.9531C11.2847 11.9531 10.6558 11.6933 10.1851 11.2207C9.94888 10.9863 9.76229 10.7068 9.63645 10.3987C9.51061 10.0907 9.44812 9.76043 9.45269 9.4277C9.45855 8.78708 9.71441 8.16794 10.1617 7.70895C10.6304 7.22849 11.2574 6.96091 11.9273 6.95309C12.5894 6.94724 13.232 7.20505 13.7046 7.66794C14.189 8.14255 14.4546 8.77731 14.4546 9.45309C14.4546 10.1211 14.1949 10.748 13.7222 11.2207C13.4903 11.4537 13.2145 11.6384 12.9108 11.7641C12.6071 11.8898 12.2814 11.9541 11.9527 11.9531ZM7.06011 9.96872C7.04253 9.7988 7.03276 9.62692 7.03276 9.45309C7.03276 9.14255 7.06206 8.83981 7.11675 8.54489C7.13042 8.47458 7.09331 8.40231 7.02886 8.37302C6.76323 8.25388 6.51909 8.08981 6.30815 7.88278C6.0596 7.64178 5.86401 7.35161 5.73387 7.0308C5.60372 6.70998 5.54188 6.36555 5.55229 6.0195C5.56987 5.39255 5.82183 4.79684 6.26128 4.34763C6.7437 3.85349 7.39214 3.58395 8.08159 3.59177C8.70464 3.59763 9.3062 3.83786 9.76128 4.26364C9.91558 4.40817 10.0484 4.56833 10.1597 4.7402C10.1988 4.80075 10.275 4.82614 10.3414 4.8027C10.6851 4.68356 11.0484 4.59958 11.4214 4.56052C11.5308 4.5488 11.5933 4.43161 11.5445 4.33395C10.9097 3.07809 9.61284 2.21091 8.11284 2.18747C5.94683 2.15427 4.14214 3.92966 4.14214 6.09177C4.14214 7.31833 4.70659 8.41208 5.59136 9.12888C4.97026 9.41599 4.398 9.81247 3.9019 10.3086C2.83159 11.3769 2.22612 12.7871 2.18706 14.2929C2.18654 14.3138 2.1902 14.3345 2.19781 14.3539C2.20543 14.3733 2.21686 14.391 2.23142 14.406C2.24598 14.4209 2.26338 14.4327 2.2826 14.4408C2.30182 14.4489 2.32246 14.4531 2.34331 14.4531H3.43901C3.523 14.4531 3.59331 14.3867 3.59526 14.3027C3.63237 13.1699 4.09136 12.1093 4.898 11.3047C5.47222 10.7304 6.17534 10.332 6.94292 10.1386C7.01909 10.1191 7.06987 10.0468 7.06011 9.96872Z"
        fill={isActive ? 'var(--background-primary)' : 'var(--primary-text)'}
      />
    </svg>
  );
};

export default VerifiersIcon;
