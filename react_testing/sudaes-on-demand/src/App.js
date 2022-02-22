import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './context/OrderDetails';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
