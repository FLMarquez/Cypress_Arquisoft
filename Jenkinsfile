pipeline {
    agent any
 
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '31dfd112-73cf-4835-937c-d2d7f515082a', url: 'https://github.com/FLMarquez/Cypress_Arquisoft.git']]])
            }
        }
        stage('Test'){
                            parallel{    
 
                                stage('Slave 1'){
                                
                                        agent {
                                        label "Agente2_1"
                                        }
 
                                        steps {
                                        bat 'npm install'                       
                                        bat 'npx cypress run cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c  --parallel'
                                        }
                                }
 
                                stage('Slave 2'){
                                        agent {
                                        label "Agente2_2"
                                        }
 
                                        steps {
                                        bat 'npm install'                      
                                        bat 'npx cypress run cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c  --parallel'
                                        }
                                    } 
 
                                       
        }
    }
}
}
