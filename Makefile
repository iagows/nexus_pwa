help:             # This menu
	@clear
	@echo ""
	@echo '███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗'
	@echo '████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝'
	@echo '██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗'
	@echo '██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║'
	@echo '██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║'
	@echo '╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝'
	@echo ""
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*"

start:            # start the project
	@bun run dev

update:           # atualiza pacotes
	@bunx npm-check-updates -u

lighthouseLocal:  # mostra qualidade pwa
	@npx lighthouse http://localhost:5173/tagmar_pwa --view

lighthouseRemoto: # mostra qualidade pwa
	@npx lighthouse https://iagows.github.io/tagmar_pwa --view

deployMajor:      # envia para o github
	@bun run buildMajor
	@bun run deploy

deployMinor:      # envia para o github
	@bun run buildMinor
	@bun run deploy

deployPatch:      # envia para o github
	@bun run buildPatch
	@bun run deploy

upgrade:          # atualiza as libs
	@nvm use
	@npx npm-check-updates -i 
	@bun update