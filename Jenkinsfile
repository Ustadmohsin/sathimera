pipeline {
    agent any

    environment {
        NODE_VERSION = '20.0.0' // optional if you're using nvm or node is pre-installed
            }

    stages {
        stage('Clone repo') {
            steps {
                script {
                    sh 'pwd'
                    }
                }
            }
        }

    post {
        success {
            echo '✅ Deployed successfully to Apache!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
