Gestor de Tarefas ⭐️

Um gestor de tarefas simples e prático que eu desenvolvi. Permite adicionar tarefas, acompanhar quantas existem no total e quantas já foram finalizadas. Cada tarefa guarda a data e hora de criação na descrição e passa a ser exibida como concluída quando o usuário marca o checkbox.

Funcionalidades principais

Adicionar nova tarefa (texto + timestamp automático).

Exibir contadores: Total de tarefas e Tarefas concluídas (atualizados em tempo real).

Marcar/desmarcar tarefa como concluída via checkbox — quando marcada, a tarefa fica sinalizada como concluída.

Mostrar na descrição de cada tarefa a data e hora em que foi criada.

Como funciona (comportamento)

O usuário digita a tarefa no campo de entrada e pressiona Enter (ou clica em Adicionar).

O sistema cria um objeto de tarefa que contém:

id (único)

texto (descrição da tarefa)

createdAt (timestamp com data e hora da criação)

completed (boolean, inicia como false)

A tarefa é adicionada à lista e aparece na interface com:

o texto,

a descrição createdAt (ex.: Criado em: 2025-09-27 01:23),

um checkbox para marcar como concluída.

Ao marcar o checkbox:

o campo completed vira true,

o estilo da tarefa muda (por exemplo: texto riscado / opacidade reduzida),

os contadores Total e Concluídas são atualizados automaticamente.


🛠️ Ferramentas e recursos do Angular utilizados

Angular CLI – para criação e gerenciamento do projeto.

Components – separação da aplicação em componentes reutilizáveis (ex.: TaskListComponent, TaskItemComponent).

Data Binding (Property e Event Binding) – comunicação entre template e lógica (marcar tarefa concluída, atualizar contadores).

Directives (*ngFor, *ngIf) – renderização condicional e listagem dinâmica das tarefas.

Two-Way Data Binding ([(ngModel)]) – para capturar o texto da tarefa no formulário.

Event Handling ((click), (change)) – controle de ações do usuário, como adicionar tarefa e marcar checkbox.

Services – para centralizar a lógica de manipulação da lista de tarefas (opcional, caso tenha implementado).

Angular Forms (Template-driven) – captura e validação simples do input de nova tarefa.

<img width="1909" height="931" alt="image" src="https://github.com/user-attachments/assets/2feb23ae-1cac-4675-b343-92073c9e90f7" />
<img width="1896" height="934" alt="image" src="https://github.com/user-attachments/assets/fa09c143-bffc-4fbf-8228-8cc75d1d8608" />
<img width="1899" height="923" alt="image" src="https://github.com/user-attachments/assets/f2ba77c3-9da7-4122-9458-c44056c49ac9" />
<img width="1899" height="926" alt="image" src="https://github.com/user-attachments/assets/ede84ce5-25c8-4a16-b921-3adc43366181" />


