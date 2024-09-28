import { Logger, MonoContext } from "@helebba/core-modules";

const LOGGER_KEY = `logger`;

export const setLogger = (logger: Logger): void => {
  MonoContext.setState({
    [LOGGER_KEY]: logger,
  });
};

export const getLogger = () => {
  return MonoContext.getState()[LOGGER_KEY] as Logger;
};