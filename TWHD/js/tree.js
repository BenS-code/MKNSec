// Function to toggle visibility of branches on a single click
function toggleBranch(branchId) {
    const branch = document.getElementById(branchId);
    branch.style.display =
      branch.style.display === "none" ? "flex" : "none";
  }

// Function to toggle visibility of sub-branches on a single click
function toggleSubBranch(subBranchId) {
    const subBranch = document.getElementById(subBranchId);
    subBranch.style.display =
      subBranch.style.display === "none" ? "flex" : "none";
  }

// Function to show tool summary in the text display
async function showToolSummary(toolName) {
  const textDisplay = document.getElementById("text-display");

  try {
    // Fetch the HTML content from the external file
    const response = await fetch(`/TWHD/summaryFiles/${toolName}.html`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${toolName}.html`);
    }

    const htmlContent = await response.text();

    // Display the tool name and HTML content
    textDisplay.innerHTML = `${htmlContent}`;
  } catch (error) {
    console.error(error);
    textDisplay.innerHTML = `<h2>Error</h2>
      <p>Failed to load summary for ${toolName}.</p>`;
  }
}

// Add event listeners to buttons for a single click
  document
    .getElementById("nodePreEngagement")
    .addEventListener("click", () => toggleBranch("branchPreEngagement"));
  document
    .getElementById("nodeDefineScope")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchDefineScope")
    );
  document
    .getElementById("nodeRulesEngagement")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchRulesEngagement")
    );
  document
    .getElementById("nodeGatherInformation")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchGatherInformation")
    );

  document
    .getElementById("nodeReconnaissance")
    .addEventListener("click", () => toggleBranch("branchReconnaissance"));
  document
    .getElementById("nodePassiveReconnaissance")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchPassiveReconnaissance")
    );
  document
    .getElementById("nodeActiveReconnaissance")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchActiveReconnaissance")
    );

  document
    .getElementById("nodeScanning")
    .addEventListener("click", () => toggleBranch("branchScanning"));
  document
    .getElementById("nodeNetworkScanning")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchNetworkScanning")
    );
  document
    .getElementById("nodeVulnerabilityScanning")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchVulnerabilityScanning")
    );

  document
    .getElementById("nodeGainingAccess")
    .addEventListener("click", () => toggleBranch("branchGainingAccess"));
  document
    .getElementById("nodeExploitation")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchExploitation")
    );
  document
    .getElementById("nodePasswordAttacks")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchPasswordAttacks")
    );

  document
    .getElementById("nodeMaintainingAccess")
    .addEventListener("click", () =>
      toggleBranch("branchMaintainingAccess")
    );
  document
    .getElementById("nodeEstablishPersistence")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchEstablishPersistence")
    );
  document
    .getElementById("nodePrivilegeEscalation")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchPrivilegeEscalation")
    );

  document
    .getElementById("nodeAnalysis")
    .addEventListener("click", () => toggleBranch("branchAnalysis"));
  document
    .getElementById("nodeDataAnalysis")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchDataAnalysis")
    );
  document
    .getElementById("nodeReportFindings")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchReportFindings")
    );

  document
    .getElementById("nodePostEngagement")
    .addEventListener("click", () => toggleBranch("branchPostEngagement"));
  document
    .getElementById("nodeDebriefing")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchDebriefing")
    );
  document
    .getElementById("nodeRemediation")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchRemediation")
    );

  document
    .getElementById("nodeMisc")
    .addEventListener("click", () => toggleBranch("branchMisc"));
  document
    .getElementById("nodeAnonymity")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchAnonymity")
    );
  document
    .getElementById("nodeLinks")
    .addEventListener("click", () =>
      toggleSubBranch("subBranchLinks")
    );