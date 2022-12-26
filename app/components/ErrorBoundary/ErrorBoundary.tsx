import { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.restart = this.restart.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo); // Assume we log into some service
  }

  restart() {
    this.setState({ ...this.state, hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>THERE IS AN ERROR!</h2>
          <button onClick={this.restart}>Reset</button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
