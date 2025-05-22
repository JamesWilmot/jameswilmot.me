{
  description = "opendata.fit development environment for the webapp and frontend packages";

  # Use the unstable nixpkgs to use the latest set of node packages
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/master";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem
    (system: let
      pkgs = import nixpkgs {
        inherit system;
      };
      pkgsUnstable = import <nixpkgs-unstable> {
        inherit system;
      };
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          # Set the major version of Node.js
          pkgs.nodejs_22
          pkgs.yarn-berry
          #pkgs.vips
          #pkgs.glibc
          pkgs.nodePackages.typescript
          # pkgs.nodePackages.typescript-language-server

          # dependencies for grip markdown viewer
          #pkgs.python310
          #pkgs.python310.pkgs.grip
          #pkgs.imagemagick

          # deployment
          # pkgs.terraform
          # pkgs.awscli2

          # gpxtools
          #pkgs.cmake
          #pkgs.autoconf
          #pkgs.automake
        ];
      };
    });
}
