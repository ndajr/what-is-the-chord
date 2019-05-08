import styled from 'styled-components/macro'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  max-width: 970px;
  width: 100%;
  ${({ hard }) => hard && `
    width: 970px;
  `}
`

export const Row = styled.div`
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'}
  ${({ align }) => align === 'middle' &&`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
  `}
  ${({ relative }) => relative &&`
    position: relative;
  `}

  &:after {
    content: ".";
    display: block;
    height: 0;
    font-size: 0;
    clear: both;
    visibility: hidden;
  }
  &.relative {
    position: relative;
  }
  &.middle .col {
    float: none;
  }
  &--middle:after {
    display: none;
  }
  &--1 > .col {
    width: 100%;
  }
  &--1-2 > .col {
    width: 50%;
  }
  &--1-13 > .col {
    width: 7.6923%;
  }
  .col {
    float: left;
    min-height: 1px;
  }
  @media screen and (max-width: 970px) {
    &--xs-left {
      text-align: left;
    }
    &--xs-right {
      text-align: right;
    }
    &--xs-center {
      text-align: center;
    }
    &--pad {
      padding-left: 20px;
      padding-right: 20px;
    }
    &__xs-12 {
      float: none;
      width: 100% !important;
    }
  }
  @media screen and (min-width: 970px) {
    &--sm-left {
      text-align: left;
    }
    &--sm-right {
      text-align: right;
    }
    &--sm-center {
      text-align: center;
    }
  }
`