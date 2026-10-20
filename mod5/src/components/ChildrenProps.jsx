function Card({children, title, color = "blue"}) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-300",
    green: "border-green-500 bg-green-300",
    purple: "border-purple-500 bg-purple-300",
    red: "border-red-500 bg-red-300",
  }
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

function Container({children,layout = 'vertical'}) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizantal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  }
  return (
    <div className={layoutClasses[layout]}>{children}</div>
  )
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white text-black rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Children Props</h2>
        <p className="text-gray-600 mb-6">
          They make components reusable by allowing you to place text, elements, or other components inside them.
        </p> 
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Character Profile</h3>
            <Container layout="grid">
              <Card title="User Profile" color="blue">
                <p className="mb-2">
                  <strong>Name:</strong> Loki Laufeyson
                </p>
                <p className="mb-2">
                  <strong>Race:</strong> Frost Giant / Jötunn
                </p>
                <p className="mb-2">
                  <strong>Alignment:</strong> Chaotic Neutral
                </p>
                <p className="mb-2">
                  <strong>Role:</strong> Sorcerer, trickster, strategist
                </p>
              </Card>

              <Card title="Mental Attributes" color="green">
                <p className="mb-2">
                  <strong>Intelligence:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Willpower:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Creativity:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Perception:</strong> S
                </p>
              </Card>

              <Card title="Physical Attributes" color="purple">
                <p className="mb-2">
                  <strong>Endurance:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Durability:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Strength:</strong> A
                </p>
                <p className="mb-2">
                  <strong>Speed:</strong> A
                </p>
              </Card>

              <Card title="Combat Attributes" color="red">
                <p className="mb-2">
                  <strong>Combat Skill:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Magical Control:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Tactical Strategy:</strong> S
                </p>
                <p className="mb-2">
                  <strong>Weapon Mastery:</strong> A
                </p>
              </Card>
            </Container>
          </div>
        </div>
    </section>
  )
}

export default ChildrenProps
