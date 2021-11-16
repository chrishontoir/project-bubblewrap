import React, { Component } from 'react';

const logErrors = () => {
  return process.env.NODE_ENV === 'development';
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(e) {
    if (process.env.NODE_ENV === 'dev') {
      console.log(e)
    }
    this.setState({ hasError: true });
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  resetError(e) {
    this.setState({ hasError: false })
  }

  render() {
    window.onerror = (...error) => {
      if (logErrors()) {
        console.error(error[4]);
      }
      this.setState({ hasError: true });
      return true;
    }

    return (
      <>
        { this.state.hasError && React.cloneElement(this.props.errorComponent, { resetError: () => this.resetError() }) }
        { this.state.hasError || this.props.children }
      </>
    )
  }
}

export default ErrorBoundary;
