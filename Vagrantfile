# -*- mode: ruby -*-
# vi: set ft=ruby :
#
PROJECT = "Astra"
WORKSPACE="/home/vagrant/work/main"

Vagrant.configure("2") do |config|    
    if Vagrant.has_plugin?("vagrant-timezone")
      config.timezone.value = "America/Mexico_City"
    end
        
    config.vm.box = "bento/ubuntu-20.04-arm64"

    # NGINX
    config.vm.network "forwarded_port", guest: 8080, host: 8080 

    config.vm.provider "parallels" do |prl|
        prl.name = "#{PROJECT}"
        prl.memory = "8192"
    end

    config.vm.synced_folder ".", 
        "#{WORKSPACE}", 
        create: true,
        type: "nfs"
    
    config.vm.provision "ansible_local" do |ansible|
        ansible.become = true,
        ansible.become_user = "root",
        ansible.provisioning_path = "#{WORKSPACE}",
        ansible.playbook = "provision/play.yml"
        # By Default Vagrant will use our variables inside
        # our provisioning directory inside group_vars.
    end 

    config.vm.provision "docker"

end

