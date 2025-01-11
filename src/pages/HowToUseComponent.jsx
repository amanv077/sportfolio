import Button from "../components/Button";
import Card from "../components/Card/Gradient";
import Heading from "../components/Heading";

function HowToUseComponent() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Gradient Components Showcase</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="light">Light Button</Button>
            <Button variant="dark">Dark Button</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <Button fullWidth>Full Width</Button>
          <Button radialGradientPosition="0% 100%">
            Custom Gradient Position
          </Button>
        </div>
      </section>

      <section>
        <Heading
          text="Darker Gradient Heading"
          size="lg"
          variant="darkerGradient"
        />
        <Heading text="White Text Heading" size="md" variant="white" />
        <Heading
          text="Lighter Gradient Heading"
          size="sm"
          variant="lighterGradient"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Default Card
            </h3>
            <p className="text-gray-200">
              This is a default card with medium size.
            </p>
          </Card>
          <Card size="lg" radialGradientPosition="50% 50%">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Large Card
            </h3>
            <p className="text-gray-200">
              This is a large card with custom gradient position.
            </p>
          </Card>
          <Card size="sm">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Small Card
            </h3>
            <p className="text-gray-200">This is a small card.</p>
          </Card>
          <Card fullWidth>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Full Width Card
            </h3>
            <p className="text-gray-200">
              This card takes up the full width of its container.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default HowToUseComponent;
