let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://79l5uyocic.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-oleg"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-oleg'
  process.env.restaurant_notification_topic = 'restaurants-dev-oleg'

  initialized = true
}

module.exports = {
  init
}