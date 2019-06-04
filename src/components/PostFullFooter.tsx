import * as React from 'react';
import styled from '@emotion/styled';
import AdCodeFund from './AdCodeFund';

const PostFullFoot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 3vw 0 6vw 0;
  max-width: 840px;
`;

const PostFullFooter: React.FunctionComponent = props => <PostFullFoot>{props.children}<AdCodeFund></AdCodeFund></PostFullFoot>;

export default PostFullFooter;
