import { withAuthenticator } from '@aws-amplify/ui-react';

function MyComponent() {
    return (
        <div>
            <h1>Welcome to my page!</h1>
        </div>
    );
}

export default withAuthenticator(MyComponent);
