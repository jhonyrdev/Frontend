import { Container, Row, Col, Card, Table } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <Container fluid className="p-4">
        <h2 className="mb-4">
          <i className="fas fa-chart-line me-2"></i>Panel de Administración
        </h2>

        {/* Tarjetas de resumen */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-white bg-primary">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-box-open me-2"></i>Productos en stock
                </Card.Title>
                <Card.Text>+120</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-white bg-success">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-receipt me-2"></i>Ventas del dia
                </Card.Title>
                <Card.Text>23</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-white bg-warning">
              <Card.Body>
                <Card.Title>
                  <i className="fa-solid fa-sack-dollar me-2"></i>Ganancia del Dia
                </Card.Title>
                <Card.Text>5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-white bg-danger">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-exclamation-triangle me-2"></i>Stock bajo
                </Card.Title>
                <Card.Text>8</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Gráfico de ventas */}
        <Row className="mb-4">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-chart-bar me-2"></i>Ventas por día
                </Card.Title>
                <p className="text-muted mt-2">
                  // cambiar a Chart.js o Recharts
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Top productos */}
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-star me-2"></i>Top productos
                </Card.Title>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">🥇 Arroz 1kg - 56 ventas</li>
                  <li className="list-group-item">
                    🥈 Aceite 900ml - 43 ventas
                  </li>
                  <li className="list-group-item">🥉 Leche - 39 ventas</li>
                  <li className="list-group-item">Pan - 34 ventas</li>
                  <li className="list-group-item">Azúcar - 32 ventas</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Tabla de stock crítico y pedidos recientes */}
        <Row>
          {/* Stock crítico */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-boxes-stacked me-2"></i>Stock crítico
                </Card.Title>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {"Se genera dinamicamente"}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Pedidos recientes */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-clock me-2"></i>Pedidos recientes
                </Card.Title>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Cliente</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {"Se genera dinamicamente"}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
