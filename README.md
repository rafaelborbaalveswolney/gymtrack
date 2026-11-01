# GymTrack

Aplicativo mobile desenvolvido em **React Native** para montagem e acompanhamento de fichas de academia.

O projeto foi desenvolvido como trabalho da disciplina de **Aplicativos Multiplataforma**.

## Objetivo

O GymTrack permite que o usuário escolha exercícios previamente cadastrados, configure seu treino e acompanhe a execução diretamente pelo celular.

## Funcionalidades

- Seleção de exercícios por grupo muscular
- Exercícios pré-cadastrados
- Configuração de séries
- Configuração de repetições
- Configuração de carga
- Armazenamento local da ficha
- Exclusão de exercícios
- Validação de dados
- Bloqueio de exercícios duplicados
- Cronômetro de descanso individual
- Status de exercício pendente ou concluído
- Acompanhamento do progresso do treino

## Grupos musculares

O aplicativo possui exercícios divididos nas seguintes categorias:

- Peito
- Costas
- Braços
- Pernas
- Glúteos
- Ombros

## Tecnologias utilizadas

- React Native
- JavaScript
- Expo
- Expo Router
- Expo Development Build
- AsyncStorage
- Material Community Icons

## Estrutura do projeto

```text
src/
├── app/
│   ├── exercises/
│   ├── _layout.jsx
│   ├── index.jsx
│   ├── exercise-config.jsx
│   └── workouts.jsx
│
├── components/
│   ├── ExerciseList.jsx
│   └── WorkoutExerciseCard.jsx
│
├── data/
│   └── exercises.js
│
├── services/
│   └── storage.js
│
└── styles/
    ├── colors.js
    └── commonStyles.js
```

## Organização

### app

Contém as telas e as rotas do aplicativo.

### components

Contém componentes reutilizáveis da interface.

### data

Contém os exercícios disponíveis no aplicativo.

### services

Responsável pelo armazenamento local dos dados.

### styles

Contém cores e estilos reutilizados pelas telas.

## Armazenamento

Os exercícios adicionados à ficha são armazenados localmente utilizando **AsyncStorage**.

Dessa forma, a ficha continua disponível mesmo após fechar e abrir novamente o aplicativo.

## Cronômetro

Cada exercício possui um cronômetro de descanso integrado.

O usuário pode:

- iniciar;
- pausar;
- resetar;
- concluir o exercício.

## Execução

Para iniciar o servidor de desenvolvimento:

```bash
npx expo start --dev-client
```

O aplicativo pode ser executado utilizando um **Development Build** instalado em um dispositivo Android.

## Autor

Rafael e Querley

## Projeto acadêmico

Projeto desenvolvido para fins acadêmicos na disciplina de Aplicativos Multiplataforma.