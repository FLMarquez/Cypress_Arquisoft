pipeline {
    agent any
 
    tools {nodejs "node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/FLMarquez/Cypress_Arquisoft.git'
                        bat 'npm install'
                        bat 'npm config set strict-ssl false'   
                        bat 'npm update'                                            
                        bat 'npx cypress run cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                   steps {
                        git url: 'https://github.com/FLMarquez/Cypress_Arquisoft.git'
                        bat 'npm install'
                        bat 'npm config set strict-ssl false'   
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c  --parallel'
                    
                    }
                }
 
                  
            }
 
             
        }
 
    }
            
}