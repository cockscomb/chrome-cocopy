import {h, ComponentChildren} from 'preact';
import {useCallback} from 'preact/hooks';
import {memo} from 'preact/compat';
import styled, {css} from 'styled-components';

export const MainColumn = styled.div`
  padding: 0;
  width: 840px;
  margin: 20px auto;
`;

const TitleIcon = styled.div`
  background: no-repeat center/contain url('img/logo.png');
  width: 123px;
  height: 60px;
`;

export const Title = memo(() => {
  return (
    <header>
      <TitleIcon />
    </header>
  );
});

const SectionBox = styled.div`
  margin-bottom: ${props => props.theme.space[8]};
`;

const SectionTitleHeader = styled.h2`
  font-family: ${props => props.theme.fontFamily.monospace};
  font-size: ${props => props.theme.size['xl']};
`;

const SectionInner = styled.div`
  margin-left: ${props => props.theme.space[2]};
`;

export const Section = (props: {
  title: string;
  children?: ComponentChildren;
}) => (
  <SectionBox>
    <SectionTitleHeader>{props.title}</SectionTitleHeader>
    <SectionInner>{props.children}</SectionInner>
  </SectionBox>
);

export const TextList = styled.ul`
  font-size: ${props => props.theme.size.sm};
  li {
    margin-bottom: ${props => props.theme.space[2]};
  }
  code {
    font-size: ${props => props.theme.size.xs};
    font-family: ${props => props.theme.fontFamily.monospace};
    background-color: ${props => props.theme.color.codeBg};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const Item = styled.div<{grow?: number}>`
  display: flex;
  flex-grow: ${props => props.grow || 0};
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${Item} + ${Item} {
    margin-left: ${props => props.theme.space[4]};
  }
`;

type ButtonMode = 'default' | 'danger';

const danger = css`
  color: ${p => p.theme.color.danger};
  &:focus {
    outline-color: ${p => p.theme.color.danger};
  }
`;

const ButtonStyle = styled.button<{mode?: ButtonMode}>`
  padding: ${props => props.theme.space[2]};
  background-color: transparent;
  border: solid 1px;
  border-radius: ${props => props.theme.space[1]};
  cursor: pointer;
  ${p => p.mode === 'danger' && danger};
`;

export const Button = (props: {
  mode?: ButtonMode;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ComponentChildren;
}) => {
  const onClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      props.onClick?.(event);
    },
    [props.onClick]
  );

  return (
    <ButtonStyle
      type="button"
      mode={props.mode}
      onClick={onClick as any}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonStyle>
  );
};

export const ButtonIcon = styled.i`
  margin-right: ${p => p.theme.space[1]};
`;

export const Divider = styled.div`
  margin: ${props => props.theme.space[2]} 0;
  height: ${props => props.theme.space[1]};
  background: linear-gradient(
    90deg,
    transparent 20%,
    ${props => props.theme.color.lightgray} 20%,
    ${props => props.theme.color.lightgray} 80%,
    transparent 80%
  );
`;
