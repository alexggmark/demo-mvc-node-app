import logMessage from './js/logger'
import './css/style.css'
// Log message to console
logMessage('Welcome to Expack!')

if (typeof(module.hot) !== 'undefined') {
  module.hot.accept()
}